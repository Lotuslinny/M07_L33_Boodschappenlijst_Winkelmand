import React from "react"

const ListItem = (props) => {


  /* const handleClickCartItem = (e) => {
    console.log(props.item)
  } */
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <li
        id={props.item.id}
        className="list-item"
        onClick={props.handleClickShoppingItem}
        name={props.item.title} ><h1>{props.item}</h1>
      </li>
    </div >
  )
}
const CartListItem = (props) => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <li
        id={props.item.id}
        className="list-item"
        name={props.item.title} ><h1>{props.item}</h1>
      </li>          </div >
  )
}
export { ListItem, CartListItem }


