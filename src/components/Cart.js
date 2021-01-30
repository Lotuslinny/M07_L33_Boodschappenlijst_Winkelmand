import React from "react"
import List from "./List"

const Cart = (props) => {

  return (
    <div>
      <List items={props.items}
      />
      <button className="cart-button"
        onClick={props.handleClickCart}>
        Leeg Winkelwagen
          </button>
    </div>
  )
}

export default Cart