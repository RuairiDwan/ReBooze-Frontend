import React, { Component } from 'react'

class BeerListItem extends Component {
    render () {
        return (
            <div>
                {this.props.name}
                {this.props.rating}
            </div>           
        )           
    }
}

export default BeerListItem