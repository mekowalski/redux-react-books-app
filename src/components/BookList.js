import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <div className='item' key={book.title}>
          <div className='right floated content'>
            <button className='ui button primary'>
              Select
            </button>
          </div>

          <div className='content'>{book.title}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
}

export default connect(mapStateToProps)(BookList)
