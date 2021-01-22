import React from 'react';
import './VoteButton.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import voteAsync from '../actions/ratings/voteAsync';

function VoteButton(props) {

    return (
        <button
            className={props.vote === true ? 'btn_up_vote' : 'btn'}
            onClick={() => !props.vote && props.up_vote({
                "rating_id": props.rating_id,
                "voter_id": 3
            })}
        >
            Vote
        </button>
  );
}

const mapStateToProps = () => {

    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        up_vote: (data) => {dispatch(voteAsync(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton)
