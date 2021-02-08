import React from "react"

const ListItem = (props) => {


  /* const handleClickCartItem = (e) => {
    console.log(props.item)
  } */
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <li
        key={props.item.id}
        //id={props.item.id}
        className="list-item"
        onClick={props.handleClickShoppingItem}
        //filterClickedItem={props.filterClickedItem}
        value={props.item.title} >
        <h1>{props.item}</h1>
      </li>
    </div >
  )
}
const CartListItem = (props) => {
  return (
    <div >
      <li
        key={props.id}
        className="list-item"
        value={props.title}
        amount={props.amount}>
        <h1>{props.item}</h1>
        {"hoeveelheid:" + props.amount}

      </li>
    </div >
  )
}
export { ListItem, CartListItem }


