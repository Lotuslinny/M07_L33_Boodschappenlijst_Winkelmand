import React from "react"

import List from "./List"

function ShoppingList(props) {

  return (
    <div>
      <List
        items={props.items}
        handleClickShoppingItem={props.handleClickShoppingItem}
      />
    </div>
  )
}
export default ShoppingList