export const MESSAGE_ADD = 'MESSAGE_ADD';
export const MESSAGE_ADD_SUCCESS = 'MESSAGE_ADD_SUCCESS';
export const MESSAGE_EDIT = 'MESSAGE_EDIT';
export const MESSAGE_CANCEL_EDIT = 'MESSAGE_CANCEL_EDIT';
export const MESSAGE_SAVE_EDIT = 'MESSAGE_SAVE_EDIT';
export const MESSAGE_SAVE_EDIT_SUCCESS = 'MESSAGE_SAVE_EDIT_SUCCESS';

export const messageAdd = payload => ({
  type: MESSAGE_ADD,
  payload,
});

export const messageAddSuccess = payload => ({
  type: MESSAGE_ADD_SUCCESS,
  payload,
});

export const messageEdit = payload => ({
  type: MESSAGE_EDIT,
  payload,
});

export const messageCancelEdit = payload => ({
  type: MESSAGE_CANCEL_EDIT,
  payload,
});

export const messageSaveEdit = payload => ({
  type: MESSAGE_SAVE_EDIT,
  payload,
});

export const messageSaveEditSuccess = payload => ({
  type: MESSAGE_SAVE_EDIT_SUCCESS,
  payload,
});