<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class FeedData extends Data
{
    public function __construct(
        /** @var PostData[] */
        public array $posts,
    ) {}
}
