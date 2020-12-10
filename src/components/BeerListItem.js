import React, { Component } from 'react'

class BeerListItem extends Component {
    render () {
        return (
            <div>
                {this.props.name}
                {this.props.rating}
                {this.props.brewery}
                <button/>
            </div>           
        )           
    }
}

export default BeerListItem