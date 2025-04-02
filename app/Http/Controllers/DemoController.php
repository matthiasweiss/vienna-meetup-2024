<?php

namespace App\Http\Controllers;

use App\Queries\FeedQuery;

class DemoController extends Controller
{
    public function __invoke(FeedQuery $feedQuery)
    {
        $feed = $feedQuery->get();

        return inertia('demo/demo', [
            'feed' => $feed,
        ]);
    }
}
