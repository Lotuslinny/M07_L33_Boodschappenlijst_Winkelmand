import React from "react"

import List from "./List"

function ShoppingList(props) {

  return (
    <List items={props.items} />
  )
}
export default ShoppingList