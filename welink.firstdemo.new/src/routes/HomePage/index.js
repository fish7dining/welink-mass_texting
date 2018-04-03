import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Contacts from '../../containers/Contacts';

export default class HomePage extends React.Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <Contacts/>
      </div>
    );
  }
};
