import React from "react"
import InputField from "./InputField"
import List from "./List"

const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <InputField
        type={props.text}
        value={props.title}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />

      <List
        className="v"
        items={props.items}
        handleClickShoppingItem={props.handleClickShoppingItem}
      />
    </div>
  )
}
export default ShoppingList