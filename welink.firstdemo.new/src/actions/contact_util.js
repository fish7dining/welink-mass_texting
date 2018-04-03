import {
  ACTION_TYPE_CHANGE_USER_MESSAGE,
  ACTION_TYPE_ADD_CONTACTS,
  ACTION_TYPE_DELETE_CONTACTS,
  ACTION_TYPE_CHANGE_TEMPLATE
} from '../consts/action_name';

export const changeMessage = (uid, message) => ({
  type: ACTION_TYPE_CHANGE_USER_MESSAGE,
  uid: uid,
  message: message
});
export const addContacts = ( contacts) => {
  return ({
    type: ACTION_TYPE_ADD_CONTACTS,
    contacts: contacts
  });
};

export const deleteContact = (uid) => ({
  type: ACTION_TYPE_DELETE_CONTACTS,
  uid: uid
});

export const changeTemplate = (template) => ({
  type: ACTION_TYPE_CHANGE_TEMPLATE,
  template: template
});


