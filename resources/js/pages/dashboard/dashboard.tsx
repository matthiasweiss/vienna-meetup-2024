import { Card } from '@/components/ui/card';
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

            <div className="mx-auto grid w-full gap-8 p-4 md:grid-cols-2 md:py-8">
                <Card className="px-6 md:col-span-2">
                    <CreatePostForm />
                    {/**<CreatePostFormNoPrecognition />*/}
                </Card>

                <Card className="px-6">
                    <h3 className="font-semibold">Your latest posts</h3>

                    <div className="contents">
                        {myLatestPosts?.map((post) => <Post key={post.id} post={post} />)}
                    </div>
                </Card>

                <Card className="px-6">
                    <h3 className="font-semibold">Feed</h3>

                    <Deferred data="feed" fallback={<CardSkeleton />}>
                        <div className="contents">
                            {feed?.posts.map((post) => <Post key={post.id} post={post} />)}
                        </div>
                    </Deferred>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
