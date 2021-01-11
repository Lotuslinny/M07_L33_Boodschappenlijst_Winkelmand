import React from "react"
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"

function Container(props) {
  return (
    <div >
      <GroceryList />
      <ShoppingCart />
    </div>
  )
}

export default Container