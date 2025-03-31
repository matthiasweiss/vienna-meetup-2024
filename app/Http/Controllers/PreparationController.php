<?php

namespace App\Http\Controllers;

use App\Queries\FeedQuery;
use Inertia\Inertia;

class PreparationController extends Controller
{
    public function __invoke(FeedQuery $feedQuery)
    {
        return Inertia::render('preparation/preparation', [
            'feed' => $feedQuery->get(),
        ]);
    }
}
