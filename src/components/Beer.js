import React, { Component } from 'react'
import { connect } from 'react-redux';
import BeerListItem from './BeerListItem'
import retrieveRatingsAsync from '../actions/ratings/retrieveRatingsAsync'
import retrieveVotesAsync from '../actions/ratings/retrieveVotesAsync'
import VoteButton from './VoteButton';


class Beer extends Component {

    componentDidMount () {
        this.props.retrieveRatings()
        setTimeout(this.props.retrieveVotes, 3000);
        //this.props.retrieveVotes()
        //console.log("The ratings are")
        console.log(this.props.ratings)

    }

    render () {
        
        console.log(this.props.ratings)

        console.log("Beers")
        console.log(this.props.beers)
        const beer = this.props.beers && this.props.beers.filter((c) => (
            c.name === this.props.beerSelected
        ))
        console.log(this.props.ratings)
        const filtered_ratings = this.props.beers && this.props.ratings && Object.values(this.props.ratings).filter((c) => (
            c.beer_id == 1
        ))

        console.log(filtered_ratings)

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
        beerSelected: beers.beerSelected
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveRatings: (data) => { dispatch(retrieveRatingsAsync(data)) },
        retrieveVotes: (data) => { dispatch(retrieveVotesAsync(data)) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Beer)