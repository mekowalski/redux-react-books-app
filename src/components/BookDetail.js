import React from 'react';
import { connect } from 'react-redux';

//this should get a props object that contains the currently selected book
const BookDetail = (props) => {
  console.log(props)
  return (
    <div>
      Song detaillllllssss
    </div>
  )
}

//reach into state and pull out only the properties i care about
//return it as an object
const mapStateToProps = (state) => {
  return { book: state.selectBook }
}

//wire up connect() with mapStateToProps
export default connect(mapStateToProps)(BookDetail)
