<?php

namespace App\Http\Controllers;

use App\Data\StorePostData;
use Illuminate\Http\RedirectResponse;

class PostController extends Controller
{
    public function store(StorePostData $data): RedirectResponse
    {
        /** @var User $user */
        $user = auth()->user();

        $user->posts()->create($data->toArray());

        return back();
    }
}
