import React from "react"
import ListItem from "./ListItem"

/* handleClickShoppingItem = (e) => {
  console.log("Je klinkt op een ShoppingItem")
} */
const List = (props) => {
  /*  Of je moet hier!!! een clickItem() functie maken, of je moet
   hem uit je container halen en dan dus d.m.v. 
   props.functieNaam hem hier in je onClick zetten */

  return (
    <div>
      <ul>
        {props.items.map((item) => {
          return (
            <ListItem
              key={item.id}
              className="list-item"
              handleClickItem={item.handleClickItem}
              item={item.title}

            />
          )
        })}
      </ul>
    </div>
  )
}
export default List