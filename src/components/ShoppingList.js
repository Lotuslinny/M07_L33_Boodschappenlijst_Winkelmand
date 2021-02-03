import React from "react"
import InputField from "./InputField"
import List from "./List"

const ShoppingList = (props) => {
  return (
    <div>
      <InputField
        type={props.text}
        value={props.title}
        handleChange={props.handleChange}
      />
      <button
        //key={props.id}
        type={props.onClick}
        value={props.value}
        onClick={props.handleClickInputField}>
        Voeg toe
        </button >
      <List
        items={props.items}
        handleClickShoppingItem={props.handleClickShoppingItem}
      />
    </div>
  )
}
export default ShoppingList