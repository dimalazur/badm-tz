import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageList from '../components/MessageList';
import {
  messageEdit,
  messageCancelEdit,
  messageSaveEdit
} from '../actions/actions'

class MessageListWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeStatus:''
    }
    this.changeStatusHeandler = this.changeStatusHeandler.bind(this);
    this.messageEditHeandler = this.messageEditHeandler.bind(this);
  }

  changeStatusHeandler(value){
    this.setState({
      changeStatus: value
    })
  }

  messageEditHeandler(id, status){
    const {onMessageEdit} = this.props;
    this.setState({
      changeStatus: status
    })
    onMessageEdit(id);
  }

  render() {
  
    const { 
      changeStatus 
    } = this.state;
    const { 
      messageList, 
      messageSelect, 
      onMessageCancelEdit,
      onMessageSaveEdit
    } = this.props;
    
    return (
      <React.Fragment>
        <MessageList 
          listData={messageList} 
          messageSelect={messageSelect} 
          inputChangeStatus={value => this.changeStatusHeandler(value)} 
          changeStatus={changeStatus} 
          onMessageSaveEdit={onMessageSaveEdit}
          onMessageCancelEdit={onMessageCancelEdit}
          onClickEdit={(id, status)=> this.messageEditHeandler(id, status)}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messageList: state.smsSending.messageList,
    messageSelect: state.smsSending.messageSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageEdit: (payload) => {
      dispatch(messageEdit(payload))
    },
    onMessageCancelEdit: () => {
      dispatch(messageCancelEdit())
    },
    onMessageSaveEdit: (payload) => {
      dispatch(messageSaveEdit(payload))
    }
  }
}

const MessageListWrapConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListWrap);

MessageListWrap.propTypes = {
  messageList: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string,
      createDate: PropTypes.string,
      status: PropTypes.string,
      phoneNumber: PropTypes.string,
      fullName: PropTypes.string,
      messageText: PropTypes.string
    }).isRequired
  ),
  messageSelect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onMessageEdit: PropTypes.func,
  onMessageCancelEdit: PropTypes.func,
  onMessageSaveEdit: PropTypes.func
};

export default MessageListWrapConnect;