import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import beerPageSelection from '../actions/beers/beerPageSelection'
import './BeerListItem.css'


class BeerListItem extends Component {
    render () {
        return (
            <div className="beer-list-item-container">
                <div class="row">
                    <div>
                    <img src={this.props.image} className="photo" />
                    </div>
                    <div class="column-text">
                        <div className="row">
                            <Link 
                            to='beer-page' 
                            className="link">
                                <div 
                                type="text"
                                className="beer-text"
                                onClick={() => this.props.beerPageSelection(this.props.id)}>
                                    {this.props.name}
                                </div>
                            </Link>
                        </div>
                        <div className="column-brewery">
                            <div 
                            type="text" 
                            className="brewery-text">
                                Brewery
                            </div>
                            <div 
                            type="text" 
                            className="brewery-text">
                                {this.props.brewery}
                            </div>
                            
                        </div>                   
                    </div>
                    <div class="column-numbers">
                        <div className="row">
                            <div>
                                Average Rating: 
                            </div>
                            <div>
                                {this.props.rating}
                            </div>
                        </div>
                        <div className="row">
                        <div>
                                Total Ratings: 
                            </div>
                            <div>
                                {this.props.totalRatings}
                            </div>
                        </div>                
                    </div>
                </div>           
            </div>
            
        )           
    }
}

const mapStateToProps = () => {

    return {
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      beerPageSelection: (data) => {dispatch(beerPageSelection(data))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BeerListItem)
