export const RECEIVE_BEERS = 'RECEIVE_BEERS'

export function receiveBeers (beers) {
    return {
        type: RECEIVE_BEERS,
        beers
    }
}