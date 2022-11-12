import React from "react";
import { NavDropdown } from "react-bootstrap";

const Home = () => {
  const homeItems = [
    {
      itemLink: "#action1",
      itemName: "Home Furnishings",
    },
    {
      itemLink: "#action2",
      itemName: "Living Room Furniture",
    },
    {
      itemLink: "#action3",
      itemName: "Kitchen And Dining",
    },
    {
      itemLink: "#action4",
      itemName: "Home Decor",
    },
  ];
  return (
    <div>
      {homeItems.map((item) => {
        return (
          <>
            <NavDropdown.Item href={item.itemLink}>
              {item.itemName}
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </>
        );
      })}
    </div>
  );
};

export default Home;
