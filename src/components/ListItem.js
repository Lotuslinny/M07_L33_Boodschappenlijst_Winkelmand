import React from "react"

function ListItem(props) {
  return (
    <div className="list-item">
      <li
        key={props.item.id}
        value={props.item.title} ><h1>{props.item.title}</h1>
      </li>

    </div>
  )
}
export default ListItem