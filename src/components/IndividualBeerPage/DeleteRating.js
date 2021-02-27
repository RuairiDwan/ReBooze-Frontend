import React from 'react';
import './DeleteRating.css';
import { connect } from 'react-redux';
import deleteRatingAsync from '../../actions/ratings/deleteRatingAsync';
import Cookies from 'universal-cookie';


function DeleteRating(props) {
    const cookie = new Cookies()

    return (
        <div>
            <button 
            className="delete-button"
            onClick={() => props.deleteRating(props.id, cookie.get('JWT'))}>
                Delete
            </button>
        </div>
  );
}

const mapStateToProps = () => {

    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteRating: (id, token) => {dispatch(deleteRatingAsync(id, token))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRating)