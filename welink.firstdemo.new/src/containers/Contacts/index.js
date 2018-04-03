import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContacts } from '../../actions/contact_util';
import { Map } from 'immutable';
import ContactUtil from '../ContactUnit';
import TemplateText from '../TemplateText';
import {getRealName} from '../../helper/template'

@connect(
  state => ({
    global: state.global,
    contacts: state.contacts
  }),
  dispatch => bindActionCreators({ addContacts }, dispatch)
)
export default class Contacts extends React.Component {

  _onRefreshMessage() {
    let template = this.props.contacts.get('template');
    let contactList = this.props.contacts.get('contactList');
    let newList = contactList.map(item => {
      let contact = item.get('contact');
      let finalName = getRealName(contact);
      return item.set('message', finalName + ',' + template);
    });
    this.props.addContacts(newList);
  }

  _onSendMessage() {
    let template = this.props.contacts.get('template');
    let contactList = this.props.contacts.get('contactList');
     contactList.map(item => {
      let contact = item.get('contact');
      let finalName = getRealName(contact);
      item = item.set('message', finalName + ',' + template);

      let subTitle = item.get('message');
      let title = subTitle;
      let url = 'http://47.93.191.168:4300/?title=' + title + '&subtitle=' + subTitle;
      let employeeNumber = item.get('contact').employeeNumber;

      window.HWH5.sendIMCard({
        receiver: employeeNumber,
        receiveType: '0',
        cardType: 'txt',
        receiveName: 'IM卡片',
        title: title,
        from: 'WeLink',
        subTitle: subTitle,
        iconURL: 'xx',
        sourceUrl: url,
        iOpenURI: '',
        aOpenURI: '',
        handlerH5UriAndroid: '',
        handlerH5UriIOS: '',
        isPCDisplay: 0,
        fileID: 'xx',
        ownerID: 'xx',
        format: 'txt',
        fileSize : 16
      }).catch((error)=>{
        console.log('分享卡片消息异常',error);
      });

    });


  }

  _onAddContacts() {

    let _self = this;
    window.HWH5.selectContact()
      .then((data) => {
        if (data.length === undefined || data.length === 0) {
          return;
        }

        let newContacts = {};
        for (let i in data) {
          let employeeNumber = data[i].hasOwnProperty('employeeNumber');
          if (!employeeNumber) {
            continue;
          }
          if (this.props.contacts.get('contactList')
            .get(employeeNumber)) {
            continue;
          }

          newContacts[data[i].employeeNumber] = Map({
            contact: data[i],
            message: '',
            isOverride: true
          });
        }
        _self.props.addContacts(Map(newContacts));
      })
      .catch((error) => {
        console.log('调用通讯录组件异�?, error);
      });
  }

  render() {

    let _self = this;
    let contactList = _self.props.contacts.get('contactList')
      .toList()
      .toJSON();
    console.log(contactList);
    return (
      <div style={{ paddingTop: '20px' }}>

        <TemplateText/>

        <a href="javascript:;" onClick={_self._onAddContacts.bind(_self)}
           className="weui-btn weui-btn_mini weui-btn_primary">添加联系�?/a>
        <a href="javascript:;" onClick={_self._onRefreshMessage.bind(_self)}
           className="weui-btn weui-btn_mini weui-btn_default">刷新消息</a>
        <a href="javascript:;" onClick={_self._onSendMessage.bind(_self)}
           className="weui-btn weui-btn_mini weui-btn_warn">发�?/a>
        {
          contactList.map(item => {
            console.log(item);
            return <ContactUtil message={item.message} attr={item.contact}/>;
          })
        }
      </div>
    );
  }

}


