import { render } from "@testing-library/react"
import React from "react"
import List from "./List"

function GroceryList(props) {
  return (
    <div >
      <List classname="List"
        items={props.map(item => <List />)}
      />
    </div>
  )
}

export default GroceryList