import React from "react"

function ListItem(props) {
  console.log(props)
  return (
    <div >
      <li
        item={props.item.id}
        /*  onClick={clickItem} */
        name={props.item.title} ><h1>{props.item.title}</h1>
      </li>

    </div>
  )
}
export default ListItem
