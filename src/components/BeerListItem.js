import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import beerPageSelection from '../actions/beers/beerPageSelection'



class BeerListItem extends Component {
    render () {
        return (
            <div>
                {this.props.name}
                {this.props.rating}
                {this.props.brewery}
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
