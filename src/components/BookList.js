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

//convention, normally call this function mapStateToProps()
//although it can be called whatever
//take State object(all the redux store data)
//run a calculation that will cause data to show up as props inside the component

//called with all of state inside redux store
const mapStateToProps = (state) => {
  console.log(state)
  return state
}

//mapStateToProps will be the first argument to connect()
export default connect(mapStateToProps)(BookList)
