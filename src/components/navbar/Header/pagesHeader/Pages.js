import React from "react";
import { NavDropdown } from "react-bootstrap";

const Pages = () => {
  const pageitemName = [
    {
      itemLink: "#action1",
      itemName: "Wishlist",
    },
    {
      itemLink: "#action2",
      itemName: "Cart",
    },
    {
      itemLink: "#action3",
      itemName: "Checkout",
    },
    {
      itemLink: "#action4",
      itemName: "Account",
    },
    {
      itemLink: "#action5",
      itemName: "Sign up",
    },
    {
      itemLink: "#action6",
      itemName: "Sign in",
    },
    {
      itemLink: "#action7",
      itemName: "Forget Password",
    },
    {
      itemLink: "#action8",
      itemName: "Reset Password",

    },
    {
      itemLink: "#action9",
      itemName: "Privacy and Policy",

    },
    {
      itemLink: "#action10",
      itemName: "Comming Soon",

    },
    
  ]
  return (
    <div>
      {
        pageitemName.map((item)=>{
          return(
            <>
            <NavDropdown.Item href={item.itemLink}>{item.itemName}</NavDropdown.Item>
            <NavDropdown.Divider />
            </>
          )
        })
      }
      
     
    </div>
  );
};

export default Pages;
