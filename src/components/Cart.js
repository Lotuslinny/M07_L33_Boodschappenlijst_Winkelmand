import React from "react"
import List from "./List"

const Cart = (props) => {

  return (
    <div className="cart">
      <div className="c-list">
        <List items={props.items}
        />
      </div>
      <button className="cart-button"
        onClick={props.handleClickCart}>
        Leeg Winkelwagen
          </button>
    </div>
  )
}

export default Cart