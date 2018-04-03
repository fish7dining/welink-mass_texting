import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMessage } from '../../actions/contact_util';
import './index.less';

@connect(
  _ => {
  },
  dispatch => bindActionCreators({ changeMessage }, dispatch)
)
export default class ContactUtil extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {
      expand: false
    };
  }

  _onExpand() {
    this.setState({ expand: !this.state.expand });
  }

  _onMessageChange() {
    let message = this.messageTextArea.value;
    this.props.changeMessage(this.props.attr.employeeNumber, message);

  }

  render() {
    console.log(this.props);
    return (
      <div className="contact-util">
        <hr/>
        <p>
          <button onClick={this._onExpand.bind(this)}
                  className="contact-util-expand">{this.state.expand === false ? '+' : '-'}</button>
          <span className="contact-util-name">{this.props.attr.chineseName}</span>
          <span className="contact-util-employee-number">{this.props.attr.employeeNumber}</span>
        </p>
        <p>{this.props.attr.deptName}</p>
        {
          this.state.expand ? (<textarea style={{ width: '100%' }} ref={textArea => {
            this.messageTextArea = textArea;
          }} onInput={this._onMessageChange.bind(this)} defaultValue={this.props.message} value={this.props.message}  />) : ''
        }
      </div>
    );
  }

}





