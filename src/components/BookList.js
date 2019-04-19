import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  //helper method: take list of books, map over it and return a blob of JSX
  renderList() {
    return this.props.books.map((book) => {
      return (
        <div className='item' key={book.title} >
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        A list of books
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps)(BookList)
