export const BEER_PAGE_SELECTION= 'BEER_PAGE_SELECTION'

export default function beerPageSelection(beerSelected) {
    return {
        type: BEER_PAGE_SELECTION,
        beerSelected
    }
}