import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import beerPageSelection from '../actions/beers/beerPageSelection'
import './BeerListItem.css'


class BeerListItem extends Component {
    render () {
        return (
            <div class="row">
                <div class="column">{this.props.name}</div>
                <div class="column">{this.props.rating}</div>
                <div class="column">{this.props.brewery}</div>
                <div class="column">{this.props.totalRatings}</div>
                <Link to='beer-page'>
                    <button 
                    type="button"
                    onClick={() => this.props.beerPageSelection(this.props.id)}/>
                </Link>
                
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
