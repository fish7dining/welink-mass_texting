import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeTemplate,addContacts} from '../../actions/contact_util'
import './index.less'
import {getRealName} from '../../helper/template'

@connect(
  state=>({contacts:state.contacts}),
  dispatch=>bindActionCreators({changeTemplate,addContacts},dispatch)
)
export default class TemplateText extends Component{

  _onTemplateChange(){
    let  template = this.templateTextArea.value;
    this.props.changeTemplate(template);
    let contactList = this.props.contacts.get('contactList');
    let newList = contactList.map(item=>{
      let contact = item.get('contact');
      let finalName = getRealName(contact);
      return item.set('message',finalName+","+template);
    })
    this.props.addContacts(newList);

  }

  render(){
    return (
      <div className="template-container">
        <p>群发消息编辑</p>
        <textarea ref={textArea=>{this.templateTextArea = textArea}} onInput={this._onTemplateChange.bind(this)} defaultValue={this.props.contacts.get('template')} />
      </div>
    )

  }

}






