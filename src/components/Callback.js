import React, { Component } from 'react'
import { connect } from 'react-redux';
import retrieveUserDataAsync from '../actions/users/retrieveUserDataAsync';



const Callback = (props) => {

    props.retrieveUserData({
        "name": "Rory",
      })

    return (
        <div>
            Callback Function
        </div>
    )
}

const mapStateToProps = ({user}) => {

    return {
      user: user
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
      retrieveUserData: (data) => {dispatch(retrieveUserDataAsync(data))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
