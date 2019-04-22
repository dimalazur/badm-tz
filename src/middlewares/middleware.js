import { 
  MESSAGE_ADD, 
  messageAddSuccess, 
  messageCancelEdit,
  MESSAGE_SAVE_EDIT, 
  messageSaveEditSuccess 
} from '../actions/actions';
import uuid from 'uuid';


export default store => next => action => {
  next(action);

  if (action.type === MESSAGE_ADD) {

    let newDate = new Date();
    let dateDate = (newDate.getDate() > 10) ? newDate.getDate() : '0' + newDate.getDate(); 
    let dateMonth = ( newDate.getMonth()+1 > 10) ? newDate.getMonth()+1 : '0' + (newDate.getMonth()+1);  
    const createDate = `${dateDate}.${dateMonth}.${newDate.getFullYear()}`;
    
    const getRandomStatus = () => {
      let random = Math.random();
      
      if( random <= 0.33) {
        return "Отправлено";
      } else if( random >= 0.34 && random <= 0.66) {
        return "Доставлено";
      } else {
        return "Просмотрено";
      }  
    }

    let listMessage = action.payload.phoneNumbers.map( (item, index) => {
      return {
        fullName: action.payload.fullName,
        messageText: action.payload.messageText,
        createDate,
        phoneNumber: item,
        status: getRandomStatus(),
        id: uuid(),
      }
    });
    next(messageAddSuccess(listMessage));
    
  } else if (action.type === MESSAGE_SAVE_EDIT) {
    let smsSending = store.getState().smsSending;
    let listMessage = smsSending.messageList.map( item => {
      if (action.payload.id === item.id){
        item.status = action.payload.status;
        return item;
      }
      return item;
    })

    next(messageSaveEditSuccess(listMessage));
    next(messageCancelEdit());
  }
};