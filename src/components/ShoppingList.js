import React from "react"
import InputField from "./InputField"
import List from "./List"

const ShoppingList = (props) => {
  return (
    <div className="shoppinglist">
      <div className="inputfield">
        <InputField
          type={props.text}
          value={props.title}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </div>
      <div className="s-list">
        <List
          items={props.items}
          handleClickShoppingItem={props.handleClickShoppingItem}
        />
      </div>
    </div>
  )
}
export default ShoppingList