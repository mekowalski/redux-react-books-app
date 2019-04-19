import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  render() {
    return (
      <div>
        A list of books
      </div>
    )
  }
}

export default connect()(BookList)

// function connect() {
//   return function() {
//     return 'What is this???'
//   }
// }
//
// connect()() => What is this???

//connect() returns a function
//() invokes the function
