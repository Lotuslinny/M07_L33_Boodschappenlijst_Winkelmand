import React from "react"
import List from "./List"

function Cart(props) {

  return (
    <List items={props.items} />
  )
}

export default Cart