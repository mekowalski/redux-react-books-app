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
const mapStateToProps = () => {

}

export default connect()(BookList)
