import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Select a Book</div>
  }

  return (
    <div>
      <h3>Book Details</h3>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Published Date: {book.publishedDate}</p>
      <p>Page Count: {book.pages}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { book: state.selectedBook }
}

export default connect(mapStateToProps)(BookDetail)
