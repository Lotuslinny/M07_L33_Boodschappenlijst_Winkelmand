import React from "react"
import { ListItem, CartListItem } from "./ListItem"

/* handleClickShoppingItem = (e) => {
//console.log("Je klinkt op een ShoppingItem")
}  */
const List = (props) => {
  /*  Of je moet hier!!! een clickItem() functie maken, of je moet
   hem uit je container halen en dan dus d.m.v.
   props.functieNaam hem hier in je onClick zetten */
  return (
    <div>
      <ul>
        {props.items.map((item) => {
          //return props.items
          if (item.type === "Shoppinglist")
            return (
              <ListItem
                key={item.id}
                //id={item.id}
                className="list-item"
                handleClickShoppingItem={props.handleClickShoppingItem}
                //addItemToCart={props.addItemToCart}
                item={item.title}
                type={item.type}
              />
            )
          else
            return (
              <CartListItem
                //key={item.id}
                id={item.id}
                className="list-item"
                item={item.title}
                type={item.type} />
            )
        })}
      </ul>
    </div>
  )
}
export default List

