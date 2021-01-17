import React from "react"

const ListItem = (props) => {
  const handleClickShoppingItem = (e) => {
    console.log("hello")
  }

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <li
        id={props.item.id}
        className="list-item"
        onClick={handleClickShoppingItem}
        name={props.item.title} ><h1>{props.item}</h1>
      </li>

    </div >
  )
}
export default ListItem
