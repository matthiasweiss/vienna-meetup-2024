import { queryParams, type QueryParams } from './../wayfinder'

/**
 * @see routes/settings.php:18
 * @route /settings/appearance
 */
export const appearance = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: appearance.url(options),
    method: 'get',
})

appearance.definition = {
    methods: ['get','head'],
    url: '\/settings\/appearance',
}

/**
 * @see routes/settings.php:18
 * @route /settings/appearance
 */
appearance.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return appearance.definition.url + queryParams(options)
}

/**
 * @see routes/settings.php:18
 * @route /settings/appearance
 */
appearance.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: appearance.url(options),
    method: 'get',
})

/**
 * @see routes/settings.php:18
 * @route /settings/appearance
 */
appearance.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: appearance.url(options),
    method: 'head',
})

