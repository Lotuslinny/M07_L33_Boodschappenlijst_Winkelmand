import React from "react"

function ListItem(props) {
  return (
    <div >
      <li
        key={props.item.id}
        //className="list-item"
        /*  onClick={clickItem} */
        value={props.item.title} ><h1>{props.item.title}</h1>
      </li>

    </div>
  )
}
export default ListItem
