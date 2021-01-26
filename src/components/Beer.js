import React, { Component } from 'react'
import { connect } from 'react-redux';
import BeerListItem from './BeerListItem'
import retrieveRatingsAsync from '../actions/ratings/retrieveRatingsAsync'
import retrieveVotesAsync from '../actions/ratings/retrieveVotesAsync'
import VoteButton from './VoteButton';
import beerPageSelection from '../actions/beers/beerPageSelection'



class Beer extends Component {

    componentDidMount () {
        this.props.retrieveRatings()
        this.props.retrieveVotes()
        //localStorage.getItem()
        console.log(!localStorage.getItem("beer_selected"))
        console.log(localStorage.getItem("beer_selected"))
        console.log(this.props.beerSelected)
        typeof localStorage.getItem("beer_selected") === 'string' && console.log("We here 0")//localStorage.setItem("beer_selected", this.props.beerSelected)

        if (typeof localStorage.getItem("beer_selected") === 'string') {
            localStorage.setItem("beer_selected", "3")
        }

        console.log(typeof localStorage.getItem("beer_selected"))

        //this.props.beerPageSelection(selected)

    }

    render () {

        //Printing to console props
        console.log(this.props.ratings)
        console.log("Beers")
        console.log(this.props.beers)
        console.log("Beer Selected:")
        console.log(this.props.beerSelected) 
        console.log(localStorage.getItem("beer_selected"))
        const selected = parseInt(localStorage.getItem("beer_selected"), 10)
        console.log(typeof selected)
        console.log(selected)

        //Filtering out beer that was selected by user
        const beer = this.props.beers && this.props.beers.filter((c) => (
            c.id === selected
        ))

        console.log("Filtered beer")
        console.log(beer)

        //Filtering out ratings for the selected beer
        const filtered_ratings = this.props.beers && this.props.ratings && Object.values(this.props.ratings).filter((c) => (
            c.beer_id === this.props.beerSelected
        ))

        return (
            <div>
            <div>
                <h1>Beer Page</h1>
            </div>
            <div>
                <h1>{beer && beer[0].name}</h1>
            </div>
            <div>
                <h1>Your Rating</h1>
            </div>
            <div>
                <h1>Top Ratings</h1>
                <ul>
                        {filtered_ratings && filtered_ratings.map((rating) => (
                        <li key = {rating.id}>
                                {rating.comment}
                            <VoteButton
                                vote={rating.vote ? rating.vote : false}
                                rating_id={rating.id}
                            />
                        </li>
                        )
                        )}
                </ul>
            </div>
            </div>

        )

    }


}

const mapStateToProps = ({beers, ratings}) => {

    return {
        beers: beers.beers,
        ratings: ratings,
        beerSelected: beers.beerSelected,

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveRatings: (data) => { dispatch(retrieveRatingsAsync(data)) },
        retrieveVotes: (data) => { dispatch(retrieveVotesAsync(data)) },
        beerPageSelection: (data) => { dispatch(beerPageSelection(data)) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Beer)