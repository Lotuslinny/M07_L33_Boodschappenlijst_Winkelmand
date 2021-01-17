import React from "react"
import List from "./List"

function Cart(props) {

  return (
    <div>
      <List items={props.items}
        handleClickShoppingItem={props.handleClickShoppingItem}
      />

    </div>
  )
}

export default Cart