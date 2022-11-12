import React from "react"
import { NavDropdown } from "react-bootstrap"

const Fashion = () => {
  const fashionitemName = [
    {
      itemLink: "#action1",
      itemName: "Men's Top Wear",
    },
    {
      itemLink: "#action2",
      itemName: "Men's Bottom Wear",
    },
    {
      itemLink: "#action3",
      itemName: "Women Ethenic",
    },
    {
      itemLink: "#action4",
      itemName: "Women Western",
    },
    {
      itemLink: "#action5",
      itemName: "Men Footwear",
    },
    {
      itemLink: "#action6",
      itemName: "Women Footwear",
    },
    {
      itemLink: "#action7",
      itemName: "Watches And Accessories ",
    },
    {
      itemLink: "#action8",
      itemName: "Kids",

    },
    
  ]
  return (
     <div>
        {
        fashionitemName.map((item)=>{
          return(
            <>
            <NavDropdown.Item href={item.itemLink}>{item.itemName}</NavDropdown.Item>
            <NavDropdown.Divider />
            </>
          )
        })
      }
     </div>
  )
}
export default Fashion
