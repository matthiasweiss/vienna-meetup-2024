import { Card, CardContent } from '@/components/ui/card';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { SharedData } from '@/types';
import { Deferred, Head, usePoll } from '@inertiajs/react';
import { CardSkeleton } from './card-skeleton';
import { CreatePostForm } from './create-post-form';
import { Post } from './post';

type DashboardProps = SharedData & App.Data.DashboardData;

export default function Dashboard({ feed, myLatestPosts }: DashboardProps) {
    usePoll(5000, { except: ['feed'] });

    return (
        <AppHeaderLayout>
            <Head title="Dashboard" />

            <div className="mt-8 w-full px-4">
                <h1 className="text-2xl">Dashboard</h1>
            </div>

            <div className="mx-auto grid w-full gap-8 p-4 md:grid-cols-2">
                <Card className="md:col-span-2">
                    <CardContent>
                        <CreatePostForm />
                        {/**<CreatePostFormNoPrecognition />*/}
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="grid gap-6">
                        <h3 className="font-semibold">Your latest posts</h3>

                        <div className="contents">
                            {myLatestPosts?.map((post) => <Post key={post.id} post={post} />)}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="grid gap-6">
                        <h3 className="font-semibold">Feed</h3>

                        <Deferred data="feed" fallback={<CardSkeleton />}>
                            <div className="contents">
                                {feed?.posts.map((post) => <Post key={post.id} post={post} />)}
                            </div>
                        </Deferred>
                    </CardContent>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
