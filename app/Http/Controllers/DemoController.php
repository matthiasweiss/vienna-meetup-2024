<?php

namespace App\Http\Controllers;

class DemoController extends Controller
{
    public function __invoke()
    {
        return inertia('demo/demo');
    }
}
