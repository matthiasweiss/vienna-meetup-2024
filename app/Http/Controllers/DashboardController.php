<?php

namespace App\Http\Controllers;

use App\Data\DashboardData;
use App\Queries\FeedQuery;
use App\Queries\LatestPostsQuery;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(LatestPostsQuery $latestPostsQuery, FeedQuery $feedQuery): Response
    {
        $data = new DashboardData(
            myLatestPosts: $latestPostsQuery->get(),
            feed: Inertia::defer(fn () => $feedQuery->get()),
        );

        return Inertia::render('dashboard/dashboard', $data);
    }
}
