<?php

namespace App\Queries;

use App\Data\PostData;
use Illuminate\Support\Facades\Auth;

class LatestPostsQuery
{
    /** @return PostData[] */
    public function get(): array
    {
        $myLatestPosts = Auth::user()
            ->posts()
            ->with('creator')
            ->latest()
            ->limit(5)
            ->get();

        return PostData::collect($myLatestPosts)->all();
    }
}
