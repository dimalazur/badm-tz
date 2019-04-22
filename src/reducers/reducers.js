import { combineReducers } from 'redux';
import uuid from 'uuid';

import {
  MESSAGE_ADD_SUCCESS,
  MESSAGE_EDIT,
  MESSAGE_CANCEL_EDIT,
  MESSAGE_SAVE_EDIT_SUCCESS
} from '../actions/actions';

const initialState = {
  messageList: [
    {
      id: uuid(),
      createDate: "19.04.2019",
      status: "Отправлено",
      phoneNumber: "0664004433",
      fullName: "Великодний Миколай Борисович",
      messageText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: uuid(),
      createDate: "16.04.2019",
      status: "Доставлено",
      phoneNumber: "0672181290",
      fullName: "Булах Дмитро Васильович",
      messageText: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: uuid(),
      createDate: "13.01.2018",
      status: "Просмотрено",
      phoneNumber: "0964404433",
      fullName: "Великодний Вадим Борисович",
      messageText: "Ut labore et dolore magna aliqua."
    },
    {
      id: uuid(),
      createDate: "10.02.2019",
      status: "Доставлено",
      phoneNumber: "04572181290",
      fullName: "Василь",
      messageText: "Aliqua."
    },
    {
      id: uuid(),
      createDate: "12.03.2019",
      status: "Отправлено",
      phoneNumber: "0669874433",
      fullName: "Миколай",
      messageText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: uuid(),
      createDate: "02.03.2019",
      status: "Просмотрено",
      phoneNumber: "0672181290",
      fullName: "Булах",
      messageText: "Consectetur adipisicing aliqua."
    },
  ],
  messageSelect: null

}



function smsSending (state = initialState, action)  {
  switch (action.type) {
    case MESSAGE_ADD_SUCCESS: {
      return {
        ...state,
        messageList: [
          ...state.messageList,
          ...action.payload
        ]
      }
    }

    case MESSAGE_EDIT: {
      return {
        ...state,
        messageSelect: action.payload
      }
    }

    case MESSAGE_CANCEL_EDIT: {
      return {
        ...state,
        messageSelect: null
      }
    }

    case MESSAGE_SAVE_EDIT_SUCCESS: {
      return {
        ...state,
        messageList: [
          ...action.payload
        ]
      }
    }
   
    default: {
      return state;
    }
  }
};

const clientsReducers = combineReducers({
  smsSending,
})

export default clientsReducers;