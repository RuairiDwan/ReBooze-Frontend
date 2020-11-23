import React, { Component } from 'react'
import { connect } from 'react-redux';



class BeerList extends Component {


    render () {
        console.log('Beer list')
        console.log(this.props.beers)

        return (
            <div>
                <ol>
                {this.props.beers && this.props.beers.map((beer) => (
                    <li key = {beer.id}>
                        {beer.name}
                        {beer.id}
                    </li>
                    )
                    )}
                </ol>

            </div>


        
        )}

}

const mapStateToProps = ({beers}) => {

    return {
        beers: beers.beers
    }

}

export default connect(mapStateToProps)(BeerList)