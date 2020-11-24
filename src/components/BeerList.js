import React, { Component } from 'react'
import { connect } from 'react-redux';
import beerSearch from '../actions/beerSearch'
import BeerListItem from './BeerListItem'
import CreateRating from './CreateRating'

class BeerList extends Component {

    componentDidMount () {
        this.props.beerSearch('')
    }
    render () {

        const { beers , searchTerm} = this.props
        console.log('Beer list')
        console.log(beers)

        const showingBeers =  searchTerm === '' & this.props.beers
        ? beers
        : beers && beers.filter((c) => (
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
   
        return (
            <div>
                <div>
                    <input
                        type='text'
                        value={this.props.searchTerm}
                        placeholder='Search Beers'
                        onChange={(event) => this.props.beerSearch(event.target.value)}
                    />
                </div>
                <div>
                    <ol>
                    {beers && showingBeers.map((beer) => (
                        <li key = {beer.id}>
                            <BeerListItem
                            name={beer.name}
                            rating={beer.avgRating}
                            />
                        </li>
                        )
                        )}
                    </ol>
                </div>
                <div>
                    <CreateRating
                    beerID={1}/>
                </div>
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