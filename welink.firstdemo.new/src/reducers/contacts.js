import {
  ACTION_TYPE_CHANGE_TEMPLATE,
  ACTION_TYPE_DELETE_CONTACTS,
  ACTION_TYPE_ADD_CONTACTS,
  ACTION_TYPE_CHANGE_USER_MESSAGE
} from '../consts/action_name';
import { Map, List } from 'immutable';

const initState = Map({
  contactList: Map(
    // {
    //   '00383682': Map({
    //       contact: Map({}),
    //       message: 'hello',
    //       isOverride: false
    //     }
    //   )
    // }
  ),
  template: ''
});

export const contacts = (state = initState, action) => {
  if (action === null || action === false) {
    return state;
  }
  switch (action.type) {
    case ACTION_TYPE_ADD_CONTACTS:
      let contacts = action.contacts;
      state = state.update('contactList', contactList => contactList.merge(contacts));
      break;
    case ACTION_TYPE_CHANGE_USER_MESSAGE:
      let uid = action.uid;
      let message = action.message;
      console.log(message);
      state = state.update('contactList', contactList => contactList.update(uid, userInfo => userInfo.set('message', message)));
      console.log(state.toJSON());
      break;
    case ACTION_TYPE_CHANGE_TEMPLATE:
      let template = action.template;
      state = state.set('template',template);
      break;
    default :
      break;
  }
  return state;
};
