import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\PreparationController::preparation
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
export const preparation = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: preparation.url(options),
    method: 'get',
})

preparation.definition = {
    methods: ['get','head'],
    url: '\/preparation',
}

/**
 * @see \App\Http\Controllers\PreparationController::preparation
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
preparation.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return preparation.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PreparationController::preparation
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
preparation.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: preparation.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PreparationController::preparation
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
preparation.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: preparation.url(options),
    method: 'head',
})

