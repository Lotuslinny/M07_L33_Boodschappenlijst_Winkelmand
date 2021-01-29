import React from "react"

import List from "./List"

const ShoppingList = (props) => {

  return (
    <div>
      <List
        items={props.items}
        handleClickShoppingItem={props.handleClickShoppingItem}
      //filterClickedItem={props.filterClickedItem}
      />
    </div>
  )
}
export default ShoppingList