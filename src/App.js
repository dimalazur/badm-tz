import React from 'react';
import MessageListWrap from './containers/MessageListWrap';
import CreateMessageWrapper from './containers/CreateMessageWrapper';
import HeaderMenu from './components/HeaderMenu';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import 'react-table/react-table.css';
import 'react-tagsinput/react-tagsinput.css';
import './App.css';

const App = ()=> {
  return (
    <div>
      <BrowserRouter>
        <HeaderMenu />
        <Switch>
          <Route exact path="/" component={MessageListWrap} />
          <Route exact path="/create-message" component={CreateMessageWrapper} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;