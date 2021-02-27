import React, { Component } from 'react'
import { connect } from 'react-redux';
import beerSearch from '../actions/beers/beerSearch'
import BeerListItem from './BeerListItem'
import "./BeerList.css"
class BeerList extends Component {

    componentDidMount () {
        this.props.beerSearch('')
    }
    render () {

        const { beers , searchTerm} = this.props
        console.log('Beer list')
        console.log(beers)
        console.log(searchTerm)
        const showingBeers = searchTerm === '' & this.props.beers || typeof searchTerm == 'undefined'
        ? beers
        : beers && beers.filter((c) => (
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
   
        return (
            <div className="beer-list-container">
                <div className="search-container">
                    <input 
                        className="search-box"
                        type='text'
                        value={this.props.searchTerm}
                        placeholder='Search Beers'
                        onChange={(event) => this.props.beerSearch(event.target.value)}
                    />
                    <button
                    className="search-button"
                    onClick={(event) => this.props.beerSearch(event.target.value)}>
                        Search
                    </button>
                </div>
                    {beers && showingBeers.map((beer) => (
                        <div key = {beer.id}>
                            <BeerListItem
                                name={beer.name}
                                rating={beer.avg_ating}
                                brewery={beer.brewery}
                                totalRatings={beer.totalRatings}
                                id={beer.id}
                                image={beer.image}
                            />
                        </div>
                        )
                        )}
            </div>



        
        )}

}

const mapStateToProps = ({beers}) => {

    return {
        beers: beers.beers,
        searchTerm: beers.searchTerm

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      beerSearch: (data) => {dispatch(beerSearch(data))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BeerList)