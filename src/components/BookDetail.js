import React from 'react';
import { connect } from 'react-redux';

const BookDetail = () => {
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

export default BookDetail
