import React, { Component } from 'react'
import { connect } from 'react-redux';
import submitRatingAsync from '../../actions/ratings/submitRatingAsync'
import Cookies from 'universal-cookie';
import './CreateRating.css'
import Slider from 'react-input-slider';


class CreateRating extends Component {

    componentDidMount () {
        console.log("Submit Rating Component")
        console.log("The Cookie is:")
        const cookie = new Cookies()
        console.log(cookie.get('JWT'))

    }

    render () {
        const { submitRatingAsync } = this.props
        const selected = parseInt(localStorage.getItem("beer_selected"), 10)
        const cookie = new Cookies()
        localStorage.getItem("User_ID")

        function ratingSubmitClick() {
            const commentBtn = document.getElementById('comment')
            const ratingBtn = document.getElementById('rating')
            const comment = commentBtn.value
            const rating = ratingBtn.value
            commentBtn.value = ''
            ratingBtn.value = ''
            console.log("Selecetd Beer for rating is:")
            console.log(selected)
            submitRatingAsync({
                'beer_id': selected,
                'user_id': localStorage.getItem("User_ID"),
                'beer_rating': rating,
                'comment': comment  
              }, cookie.get('JWT'))
            
        }
        console.log('Create Rating Props')
        console.log(this.props)
        

        return (
            <div>
                <div>
                    <input
                    id='comment'
                    className="comment-input"
                    type='text'
                    placeholder='Comment'
                    />
                    <div className="slider">
                        <input
                        id='rating'
                        type="range" 
                        placeholder='Number'
                        min="0" 
                        max="5" 
                        defaultValue="3" 
                        step="1"/>
                    </div>
                    
                </div>
                <div>
                    <button
                    class="submit-btn"
                    type="button"
                    onClick={() => ratingSubmitClick()}
                    >
                    Submit
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
      submitRatingAsync: (data, token) => {dispatch(submitRatingAsync(data, token))}
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(CreateRating)