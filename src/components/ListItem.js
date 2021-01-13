import React from "react"

function ListItem(props) {
  console.log(props.item)
  return (
    <div >
      <li
        id={props.item.id}
        className="list-item"
        /*  onClick={clickItem} */
        name={props.item.title} ><h1>{props.item}</h1>
      </li>

    </div>
  )
}
export default ListItem
