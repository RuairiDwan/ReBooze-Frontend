import React, { Component } from 'react'
import { connect } from 'react-redux';
import BeerListItem from './BeerListItem'
import retrieveRatingsAsync from '../actions/ratings/retrieveRatingsAsync'
import retrieveVotesAsync from '../actions/ratings/retrieveVotesAsync'
import VoteButton from './VoteButton';
import beerPageSelection from '../actions/beers/beerPageSelection'
import Createrating from './CreateRating'
import "./beerImage.css"
import CreateRating from './CreateRating';


class Beer extends Component {

    componentDidMount () {
        this.props.retrieveRatings()
        this.props.retrieveVotes()
        const storedBeerSelected = localStorage.getItem("beer_selected")
        const { beerSelected } = this.props
        console.log(beerSelected)
        typeof localStorage.getItem("beer_selected") === 'string' && console.log("We here 0")//localStorage.setItem("beer_selected", this.props.beerSelected)
        
        console.log("Items being compared")
        console.log(typeof beerSelected)
        console.log(storedBeerSelected)
        typeof beerSelected !== "undefined" && console.log(beerSelected.toString())
        typeof beerSelected !== "undefined"  && beerSelected.toString() !== storedBeerSelected && localStorage.setItem("beer_selected", beerSelected.toString())


        console.log(typeof localStorage.getItem("beer_selected"))

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
            c.beer_id === selected
        ))
        console.log("Filtered Ratings")
        console.log(filtered_ratings)

        return (
            <div>
                <div>
                    <img src={beer && selected && beer[0].image} className="photo" />
                </div>
            <div>
                <h1>Beer Page</h1>
            </div>
            <div>
                    <h1>{beer && selected && beer[0].name}</h1>
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
                <div>
                    <CreateRating/>
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