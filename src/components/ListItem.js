import React from "react"

const ListItem = (props) => {


  /* const handleClickCartItem = (e) => {
    console.log(props.item)
  } */
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <li
        //key={props.item.id}
        //id={props.item.id}
        className="list-item"
        onClick={props.handleClickShoppingItem}
        //onChange={props.addItemToCart}
        name={props.item.title} >
        <h1>{props.item}</h1>
      </li>
    </div >
  )
}
const CartListItem = (props) => {
  return (
    <div >
      <li
        //key={props.item.id}
        //id={props.item.id}
        className="list-item"
        name={props.title} ><h1>{props.item}</h1>
      </li>
    </div >
  )
}
export { ListItem, CartListItem }


