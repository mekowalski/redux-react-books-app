import React from 'react';
import { connect } from 'react-redux';

const BookDetail = (props) => {
  console.log(props)
  return (
    <div>
      Song detaillllllssss
    </div>
  )
}

const mapStateToProps = (state) => {
  return { book: state.selectBook }
}

export default connect(mapStateToProps)(BookDetail)
