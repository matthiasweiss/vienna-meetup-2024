import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\DemoController::demo
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
export const demo = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: demo.url(options),
    method: 'get',
})

demo.definition = {
    methods: ['get','head'],
    url: '\/demo',
}

/**
 * @see \App\Http\Controllers\DemoController::demo
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
demo.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return demo.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\DemoController::demo
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
demo.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: demo.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\DemoController::demo
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
demo.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: demo.url(options),
    method: 'head',
})

