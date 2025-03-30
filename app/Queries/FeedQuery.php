<?php

namespace App\Queries;

use App\Data\FeedData;
use App\Data\PostData;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class FeedQuery
{
    public function get(): FeedData
    {
        /* sleep(seconds: 2); */

        $user = Auth::user();
        $followingIds = $user->following->pluck('id');
        $relevantUserIds = [$user->id, ...$followingIds];

        $posts = Post::with('creator')
            ->whereIn('user_id', $relevantUserIds)
            ->orderBy('created_at', 'desc')
            ->get();

        $posts = PostData::collect($posts);

        return FeedData::from(['posts' => $posts]);
    }
}
