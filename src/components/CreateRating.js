import React, { Component } from 'react'
import { connect } from 'react-redux';
import submitRatingAsync from '../actions/ratings/submitRatingAsync'



class CreateRating extends Component {

    

    render () {
        const { submitRatingAsync } = this.props

        function ratingSubmitClick() {
            const commentBtn = document.getElementById('comment')
            const ratingBtn = document.getElementById('rating')
            const comment = commentBtn.value
            const rating = ratingBtn.value
            commentBtn.value = ''
            ratingBtn.value = ''

            submitRatingAsync({
                'beer_id': 1,
                'user_id': 1,
                'beer_rating': rating,
                'comment': comment  
              })
            
        }
        

        return (
            <div>
                <div> 
                    Submit a Rating
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