<?php

namespace App\Http\Controllers;

use App\Data\StorePostData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function store(StorePostData $data): RedirectResponse
    {
        $user = Auth::user();

        $user->posts()->create($data->toArray());

        return back();
    }
}
