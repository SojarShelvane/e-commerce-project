import React from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const Usericon = () => {
  return (
    <div>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle id="dropdown-custom-1 " className="user " style={{padding: "0px 7px 0px 7px",margin:" 0px 7px 0px 7px" }}>
          <i className="fa fa-user icon30 text-dark ml-2 " id="User"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Usericon;
