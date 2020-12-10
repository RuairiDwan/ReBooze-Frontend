export const RETRIEVE_BEERS = 'RETRIEVE_BEERS'

export function retrieveBeers (beers) {
    return {
        type: RETRIEVE_BEERS,
        beers
    }
}