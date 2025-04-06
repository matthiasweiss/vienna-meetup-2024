import { queryParams, type QueryParams } from './../../../../wayfinder'

/**
 * @see \App\Http\Controllers\PreparationController::PreparationController
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
const PreparationController = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: PreparationController.url(options),
    method: 'get',
})

PreparationController.definition = {
    methods: ['get','head'],
    url: '\/preparation',
}

/**
 * @see \App\Http\Controllers\PreparationController::PreparationController
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
PreparationController.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return PreparationController.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PreparationController::PreparationController
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
PreparationController.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: PreparationController.url(options),
    method: 'get',
})

/**
 * @see \App\Http\Controllers\PreparationController::PreparationController
 * @see app/Http/Controllers/PreparationController.php:10
 * @route /preparation
 */
PreparationController.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: PreparationController.url(options),
    method: 'head',
})

export default PreparationController