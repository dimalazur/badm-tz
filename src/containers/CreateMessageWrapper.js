import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageAdd } from '../actions/actions';
import PropTypes from 'prop-types';
import CreateMessageFrom from '../components/CreateMessageFrom';

class CreateMessageWrapper extends Component {
  constructor(props) {
    super(props);
    this.state ={
      phoneNumbers:[],
      fullName: "",
      messageText: ""
    }
    this.fullNameRef = React.createRef();
    this.messageTextRef = React.createRef();
    this.formSubmit = this.formSubmit.bind(this);
    this.handleChangeTagsInput = this.handleChangeTagsInput.bind(this);
  }

  formSubmit(event){
    event.preventDefault();
    const {phoneNumbers} = this.state;
    const {onMessageAdd} = this.props;

    if(phoneNumbers.length > 0) {
      onMessageAdd({
        fullName: this.fullNameRef.value.trim(),
        messageText: this.messageTextRef.value.trim(),
        phoneNumbers
      });
      this.setState({
        phoneNumbers:[]
      });
      this.fullNameRef.value = "";
      this.messageTextRef.value = "";
    }
  }
  
  handleChangeTagsInput(phoneNumbers){
    this.setState({phoneNumbers});
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header className="header-main">
                <h1 className="page-title" >Message form</h1>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <CreateMessageFrom 
                tagsInputValue={ this.state.phoneNumbers }
                tagsInputChange={this.handleChangeTagsInput} 
                fullNameValue={this.fullName}
                fullNameRef={el => this.fullNameRef = el}
                messageTextValue={this.messageText}
                messageTextRef={el => this.messageTextRef = el}
                formSubmit={this.formSubmit} 
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageAdd: (payload) => {
      dispatch(messageAdd(payload))
    }
  }
}

const CreateMessageWrapperConnect = connect(
  null,
  mapDispatchToProps
)(CreateMessageWrapper);

CreateMessageWrapper.propTypes = {
  onMessageAdd: PropTypes.func
};

export default CreateMessageWrapperConnect;