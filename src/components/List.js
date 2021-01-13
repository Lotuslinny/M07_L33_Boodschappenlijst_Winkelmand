import React from "react"
import ListItem from "./ListItem"

const List = (props) => {
  /*  Of je moet hier!!! een clickItem() functie maken, of je moet
   hem uit je container halen en dan dus d.m.v. 
   props.functieNaam hem hier in je onClick zetten */
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <ListItem
            key={item.id}
            className="list-item"
            //onClick={clickItem}
            item={item.title}
          />
        )
      })}
    </ul>
  )
}
export default List