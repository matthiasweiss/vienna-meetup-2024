import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { SharedData } from '@/types';
import { formatRelativeDate } from '@/utils/format-relative-date';
import { Deferred, Head, useForm } from '@inertiajs/react';
import { CardSkeleton } from '../dashboard/card-skeleton';
import { Feed } from '../demo/feed';

type PreparationProps = SharedData & { feed?: Feed };

export default function Preparation(props: PreparationProps) {
    const form = useForm({ content: '' });

    return (
        <AppHeaderLayout>
            <Head title="Demo" />

            <div className="mt-8 w-full px-4">
                <h1 className="text-2xl">Preparation</h1>
            </div>

            <div className="mx-auto grid w-full gap-8 p-4">
                <Card>
                    <CardContent>
                        <form
                            onSubmit={() => {
                                form.post(route('posts.store'), { preserveScroll: true });
                            }}
                            className="space-y-4"
                        >
                            <label htmlFor="content">Content</label>

                            <Input
                                id="content"
                                onChange={(e) => {
                                    form.setData('content', e.target.value);
                                }}
                                placeholder="What's up?"
                            />

                            {props.errors.content && (
                                <p className="text-destructive">{props.errors.content}</p>
                            )}

                            <Button type="submit">Add Post</Button>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="grid gap-6">
                        <h2>Feed</h2>

                        <Deferred data="feed" fallback={<CardSkeleton />}>
                            <div className="grid gap-4">
                                {props.feed?.posts.map((post) => {
                                    return (
                                        <div key={post.id}>
                                            <div className="flex w-full justify-between text-neutral-400">
                                                <div>{post.creator.email}</div>
                                                <div>{formatRelativeDate(post.createdAt)}</div>
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
