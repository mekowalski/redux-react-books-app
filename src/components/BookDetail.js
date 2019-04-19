import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Select a Book</div>
  }

  return (
    <div>
      {book.title}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { book: state.selectedBook }
}

export default connect(mapStateToProps)(BookDetail)
