<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class StorePostData extends Data
{
    public function __construct(
        #[Min(3)]
        #[Max(1000)]
        #[StringType]
        public string $content
    ) {}
}
