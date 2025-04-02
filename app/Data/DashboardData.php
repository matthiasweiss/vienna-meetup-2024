<?php

namespace App\Data;

use Inertia\DeferProp;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DashboardData extends Data
{
    public function __construct(
        /** @var array<PostData> */
        public array $latestPosts,
        public DeferProp|FeedData $feed,
    ) {}
}
