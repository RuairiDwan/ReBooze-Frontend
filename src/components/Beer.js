import React, { Component } from 'react'
import { connect } from 'react-redux';
import BeerListItem from './BeerListItem'
import retrieveRatingsAsync from '../actions/ratings/retrieveRatingsAsync'


class Beer extends Component {

    componentDidMount () {
        const ratings = this.props.retrieveRatings()
        console.log("The ratings are")
        console.log(ratings)
    }

    render () {
        
        console.log(this.props.ratings)

        console.log("Beers")
        console.log(this.props.beerSelected)
        const beer = this.props.beers && this.props.beers.filter((c) => (
            c.name === this.props.beerSelected
        ))
        
        const ratings = this.props.beers && this.props.ratings && this.props.ratings.filter((c) => (
            c.beer_id == 1
        ))

        console.log(ratings)

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
                <p>{ratings && ratings[0].comment}</p>
            </div>
            <div>
                <h1>Top Ratings</h1>
                <ul>
                    {ratings && ratings.map((rating) => (
                        <li key = {rating.id}>
                        {rating.comment}
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
        ratings: ratings.beer_ratings,
        beerSelected: beers.beerSelected
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveRatings: (data) => {dispatch(retrieveRatingsAsync(data))}     
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Beer)