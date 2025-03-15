<?php

namespace App\Http\Controllers;

use Inertia\Response;

class DemoController extends Controller
{
    public function __invoke(): Response
    {
        return inertia('demo/demo');
    }
}
