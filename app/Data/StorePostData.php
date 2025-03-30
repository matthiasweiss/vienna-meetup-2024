<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\Validation\Between;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class StorePostData extends Data
{
    public function __construct(
        #[Between(5, 100)]
        #[StringType]
        public string $content
    ) {}
}
