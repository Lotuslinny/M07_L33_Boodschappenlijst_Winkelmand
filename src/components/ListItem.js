import React from "react"

const ListItem = (props) => {


  /* const handleClickCartItem = (e) => {
    console.log(props.item)
  } */
  return (
    <div className="shopping-list-item">
      <li
        key={props.item.id}
        //id={props.item.id}
        onClick={props.handleClickShoppingItem}
        //filterClickedItem={props.filterClickedItem}
        value={props.item.title} >
        <h1 className="shopping-list-item__h1">{props.item}</h1>
      </li>
    </div >
  )
}
const CartListItem = (props) => {
  return (
    <div className="cart-list-item">
      <li
        key={props.id}
        value={props.title}
        amount={props.amount}>
        <h1 className="cart-list-item__h1">{props.item}</h1>
        <p className="cart-list-item__p">{"hoeveelheid:" + props.amount}
        </p>
      </li>
    </div >
  )
}
export { ListItem, CartListItem }


