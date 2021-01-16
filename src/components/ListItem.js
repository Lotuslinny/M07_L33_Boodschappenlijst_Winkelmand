import React from "react"

function ListItem(props) {
  const handleClickItem = () =>
    console.log("hello")

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <li
        id={props.item.id}
        className="list-item"
        onClick={handleClickItem}
        name={props.item.title} ><h1>{props.item}</h1>
      </li>

    </div>
  )
}
export default ListItem
