import React from 'react';
import PropTypes from 'prop-types';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';
import TagsInput from 'react-tagsinput';

const CreateMessageFrom = ({ 
      tagsInputValue,
      tagsInputChange,
      fullNameValue,
      fullNameRef,
      messageTextValue,
      messageTextRef,
      formSubmit
    })=> {

  return (
    <Form action="/" >
      <FormGroup>
        <Label >Телефон</Label>
        <TagsInput 
          id="phoneNumbers"
          value={tagsInputValue} 
          validationRegex={/^\d+$/}
          onChange={tagsInputChange} 
          inputProps={{placeholder: 'Добавить телефон'}} 
        />
      </FormGroup>
      <FormGroup>
        <Label for="fullName">ФИО</Label>
        <Input 
          type="text" 
          name="fullName" 
          id="fullName" 
          value={fullNameValue} 
          innerRef={fullNameRef}
        />
      </FormGroup>
      <FormGroup>
        <Label for="messageText">Сообщение</Label>
        <Input 
          type="textarea" 
          name="messageText" 
          id="messageText"
          value={messageTextValue} 
          innerRef={messageTextRef}
        />
      </FormGroup>
      <Button type="submit" onClick={formSubmit} >Submit</Button>
    </Form>
  );
}

CreateMessageFrom.propTypes = {
  tagsInputValue: PropTypes.arrayOf(PropTypes.string),
  tagsInputChange: PropTypes.func,
  fullNameValue: PropTypes.string,
  fullNameRef: PropTypes.func,
  messageTextValue: PropTypes.string,
  messageTextRef: PropTypes.func,
  formSubmit: PropTypes.func
};


export default CreateMessageFrom;