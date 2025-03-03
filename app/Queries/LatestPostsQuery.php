<?php

namespace App\Queries;

use App\Data\PostData;

class LatestPostsQuery
{
    /** @return PostData[] */
    public function get(): array
    {
        /** @var User $user */
        $user = auth()->user();
        $myLatestPosts = $user->posts()
            ->with('creator')
            ->latest()
            ->limit(3)
            ->get();

        return PostData::collect($myLatestPosts)->all();
    }
}
