import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { SharedData } from '@/types';
import { Deferred, Head, useForm } from '@inertiajs/react';
import { CardSkeleton } from '../dashboard/card-skeleton';
import { Feed } from './feed';

type DemoProps = SharedData & { feed?: Feed };

export default function Demo(props: DemoProps) {
    const form = useForm({
        content: '',
    });

    return (
        <AppHeaderLayout>
            <Head title="Demo" />

            <div className="mt-8 w-full px-4">
                <h1 className="text-2xl">Demo</h1>
            </div>

            <div className="mx-auto grid w-full gap-8 p-4">
                <Card>
                    <CardContent>
                        <form
                            onSubmit={() => {
                                form.post(route('posts.store'));
                            }}
                            className="space-y-4"
                        >
                            <label htmlFor="content">Content</label>
                            <Input
                                id="content"
                                onChange={(e) => {
                                    form.setData('content', e.target.value);
                                }}
                            />

                            {!!props.errors.content && (
                                <p className="text-destructive">{props.errors.content}</p>
                            )}

                            <Button type="submit" disabled={form.processing}>
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="grid gap-6">
                        <h2>Feed</h2>
                        <Deferred data="feed" fallback={<CardSkeleton />}>
                            <div className="space-y-4">
                                {props.feed?.posts.map((post) => {
                                    return (
                                        <div>
                                            <div className="text-muted-foreground flex justify-between">
                                                <div>{post.creator.name}</div>
                                                <div>{post.createdAt}</div>
                                            </div>
                                            <div>{post.content}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Deferred>
                    </CardContent>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
