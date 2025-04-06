import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\DemoController::DemoController
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
const DemoController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: DemoController.url(options),
    method: 'get',
})

DemoController.definition = {
    methods: ['get','head'],
    url: '\/demo',
}

/**
 * @see \App\Http\Controllers\DemoController::DemoController
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
DemoController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return DemoController.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\DemoController::DemoController
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
DemoController.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: DemoController.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\DemoController::DemoController
 * @see app/Http/Controllers/DemoController.php:9
 * @route /demo
 */
DemoController.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: DemoController.url(options),
    method: 'head',
})

export default DemoController