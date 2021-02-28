import React, { Component } from 'react'
import { connect } from 'react-redux';
import retrieveRatingsAsync from '../../actions/ratings/retrieveRatingsAsync'
import retrieveVotesAsync from '../../actions/ratings/retrieveVotesAsync'
import retrieveRatingsAndVotes from '../../actions/ratings/retrieveRatingsAndVotes'
import VoteButton from '../VoteButton';
import beerPageSelection from '../../actions/beers/beerPageSelection'
import "./beer.css"
import CreateRating from './CreateRating';
import NotLoggedinGreeting from '../NotLoggedInGreeting'
import BeerRating from './BeerRating';
import DeleteRating from './DeleteRating'

class Beer extends Component {

    componentDidMount () {
        //this.props.retrieveRatings(this.selected)
        //this.props.retrieveVotes()
        this.props.retrieveRatingsAndVotes(this.selected, this.user_id)
        const storedBeerSelected = localStorage.getItem("beer_selected")
        const { beerSelected } = this.props
        console.log(beerSelected)
        
        typeof beerSelected !== "undefined"  && beerSelected.toString() !== storedBeerSelected && localStorage.setItem("beer_selected", beerSelected.toString())


    }

    render () {

        //Printing props to console
        const selected = parseInt(localStorage.getItem("beer_selected"), 10)
        const logged_in = localStorage.getItem("logged in")

        this.selected = selected

        
        //Filtering out beer that was selected by user
        const beer = this.props.beers && this.props.beers.filter((c) => (
            c.id === selected
        ))

        //Filtering out ratings for the selected beer
        const filtered_ratings = this.props.beers && this.props.ratings && Object.values(this.props.ratings).filter((c) => (
            c.beer_id === selected
        ))
        
        //Filtering out user rating for this beer
        console.log("User ID from storage")
        console.log(localStorage.getItem("User_ID"))
        const user_id = parseInt(localStorage.getItem("User_ID"), 10)
        this.user_id = user_id

        const user_rating = this.props.ratings && Object.values(this.props.ratings).filter((c) => (
            c.user_id === user_id
        ))

        console.log("the user ratng is:")
        console.log(user_rating)



        return (
            <div>
                <div>
                    <img src={beer && selected && beer[0].image} className="beer-photo" />
                </div>
            <div> 
                <div className="heading-row">
                    <h1>{beer && selected && beer[0].name}</h1>
                </div>
                <div class="details-row">
                    <div class="details-left">
                    {beer && selected && beer[0].strength}%
                    </div>
                    <div class="details-middle">
                        <div class="">
                            Average
                        </div>
                        <div class="">
                            {beer && selected && beer[0].avg_ating}
                        </div>
                    </div>
                    <div class="details-right">
                    <div class="">
                            Total Ratings
                        </div>
                        <div class="">
                            {beer && selected && beer[0].totalRatings}
                        </div>
                    </div>
                </div>
                    
            </div>
            <div>
                <div className="row">
                    <h1>Your Rating</h1>
                </div>
                <div className={!user_rating[0] ? "" : "rating-container"}>
                    {logged_in === "true" && !user_rating[0] && <CreateRating/>}
                    {logged_in === "true" && user_rating[0] && <BeerRating rating={user_rating[0]}/>}
                </div>
                <div>
                    {logged_in === "true" && user_rating[0] && <DeleteRating id={user_rating[0].id}/>}
                </div>
                <div>
                    {logged_in === "false" && <NotLoggedinGreeting/>}
                </div>
            </div>
            <div className="ratings">
                <div>
                    <h1>Top Ratings</h1>
                </div>
                <div>
                        {filtered_ratings && filtered_ratings.map((rating) => (
                        <div class="rating-container" key = {rating.id}>
                                <BeerRating
                                rating={rating}
                                />                            
                        </div>
                        )
                        )}
                </div>
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
        beerPageSelection: (data) => { dispatch(beerPageSelection(data)) },
        retrieveRatingsAndVotes: (beerID, userID) => {dispatch(retrieveRatingsAndVotes(beerID, userID))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Beer)