import React, { Component } from "react";
import VoteButton from '../VoteButton'
import './BeerRating.css'

class BeerRating extends Component {


    
render(){
    

    return (
        <div class="ratings-container">
            <div class="rating-column-container">
                <div class="rating-column-title">
                    RoryDwan
                </div>
                <div class="row">
                <div class="column-comment">
                    {this.props.rating.comment}
                </div>
                <div class="column-button">
                    <VoteButton
                    vote={this.props.rating.vote ? this.props.rating.vote : false}
                    rating_id={this.props.rating.id}
                    />
                </div>
                <div class="column-number">
                    {this.props.rating.vote_count}
                </div>
                </div>
            </div>
        </div>
    );
}
};

export default BeerRating;