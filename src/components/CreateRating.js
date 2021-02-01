import React, { Component } from 'react'
import { connect } from 'react-redux';
import submitRatingAsync from '../actions/ratings/submitRatingAsync'



class CreateRating extends Component {

    

    render () {
        const { submitRatingAsync, beer } = this.props
        const selected = parseInt(localStorage.getItem("beer_selected"), 10)

        function ratingSubmitClick() {
            const commentBtn = document.getElementById('comment')
            const ratingBtn = document.getElementById('rating')
            const comment = commentBtn.value
            const rating = ratingBtn.value
            commentBtn.value = ''
            ratingBtn.value = ''

            submitRatingAsync({
                'beer_id': selected,
                'user_id': 1,
                'beer_rating': rating,
                'comment': comment  
              })
            
        }
        console.log('Create Rating Props')
        console.log(this.props)
        

        return (
            <div>
                <div> 
                    Submit a Rating for {this.props.beerName}
                    

                </div>
                <div>
                    <input
                    id='comment'
                    type='text'
                    placeholder='Comment'
                    />
                    <input
                    id='rating'
                    type='number'
                    placeholder='Number'
                    />
                </div>
                <div>
                    <button
                    type="button"
                    onClick={() => ratingSubmitClick()}
                    >
                    Submit Rating
                    </button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({beers}) => {

    return {
        beers: beers.beers
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      submitRatingAsync: (data) => {dispatch(submitRatingAsync(data))}
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(CreateRating)