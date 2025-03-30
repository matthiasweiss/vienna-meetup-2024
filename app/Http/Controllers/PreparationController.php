<?php

namespace App\Http\Controllers;

use App\Queries\FeedQuery;
use Inertia\Inertia;

class PreparationController extends Controller
{
    public function __invoke(FeedQuery $feedQuery)
    {
        // $feed = $feedQuery->get();

        // return Inertia::render('preparation/preparation', [
        //     'feed' => $feed,
        // ]);

        return Inertia::render('preparation/preparation', [
            'feed' => Inertia::defer(fn () => $feedQuery->get()),
        ]);
    }
}
