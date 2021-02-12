import React from 'react';
import './VoteButton.css';
import { connect } from 'react-redux';
import voteAsync from '../actions/ratings/voteAsync';
import UpArrowGreen from '../images/UpArrowGreen.png'
import UpArrowGrey from '../images/UpArrowGrey.png'
import "./VoteButton.css"

function VoteButton(props) {

    return (
        <div>
            <div>
                <img 
                src={props.vote === true ? UpArrowGreen : UpArrowGrey}
                className="btn"
                onClick={() => !props.vote && props.up_vote({
                    "rating_id": props.rating_id,
                    "voter_id": 1
                })}
                />
            </div>
        </div>
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
