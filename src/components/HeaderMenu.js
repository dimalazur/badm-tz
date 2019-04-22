import React from 'react';
import {Link} from 'react-router-dom';
import { 
  Nav, 
  NavItem 
} from 'reactstrap';

const HeaderMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="nav-holder col-md-12">
          <Nav className="nav-main">
            <NavItem>
              <Link to="/">Message list</Link>
            </NavItem>
            <NavItem>
              <Link to="/create-message">Create message</Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;