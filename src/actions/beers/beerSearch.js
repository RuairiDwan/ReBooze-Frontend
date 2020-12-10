export const BEER_SEARCH = 'BEER_SEARCH'

export default function beerSearch(searchTerm) {
    return {
        type: BEER_SEARCH,
        searchTerm
    }
}