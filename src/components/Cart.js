import React from "react"
import List from "./List"

const Cart = (props) => {

  return (
    <div>
      <List items={props.items}
      />
    </div>
  )
}

export default Cart