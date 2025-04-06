import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:11
 * @route /posts
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '\/posts',
}

/**
 * @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:11
 * @route /posts
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
 * @see \App\Http\Controllers\PostController::store
 * @see app/Http/Controllers/PostController.php:11
 * @route /posts
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

const posts = { store }

export default posts