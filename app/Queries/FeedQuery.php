<?php

namespace App\Queries;

use App\Data\FeedData;
use App\Data\PostData;
use App\Models\Post;

class FeedQuery
{
    public function get(): FeedData
    {
        sleep(seconds: 2);

        /** @var User $user */
        $user = auth()->user();
        $followingIds = $user->following->pluck('id');

        $posts = Post::with('creator')
            ->whereIn('user_id', $followingIds)
            ->orderBy('created_at', 'desc')
            ->get();

        $posts = PostData::collect($posts);

        return FeedData::from(['posts' => $posts]);
    }
}
