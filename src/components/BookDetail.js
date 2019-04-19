import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Select a Book</div>
  }

  return (
    <div>
      <h3>Book Details</h3>
      <p>
      {book.title}
      <br />
      {book.author}
      <br />
      {book.genre}
      <br />
      {book.publishedDate}
      <br />
      {book.pages}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { book: state.selectedBook }
}

export default connect(mapStateToProps)(BookDetail)
