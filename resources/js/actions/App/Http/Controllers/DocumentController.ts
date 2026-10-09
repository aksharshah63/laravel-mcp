import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: store.url(options),
    method: 'get',
})

store.definition = {
    methods: ["get","head"],
    url: '/test-document',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
store.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: store.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
store.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: store.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: store.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
        storeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: store.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DocumentController::store
 * @see app/Http/Controllers/DocumentController.php:10
 * @route '/test-document'
 */
        storeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: store.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    store.form = storeForm
const DocumentController = { store }

export default DocumentController