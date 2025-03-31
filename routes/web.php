<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DemoController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PreparationController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::get('/demo', DemoController::class)->name('demo');

    Route::post('/posts', [PostController::class, 'store'])->name('posts.store')
        ->middleware([HandlePrecognitiveRequests::class]);

    Route::get('/preparation', PreparationController::class)->name('preparation');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
