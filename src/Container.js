import React from "react"
/* import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart" */
import ListItem from "./components/ListItem"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" }
      ],
      shoppingListItems: [
        { id: 1, title: "Peren" },
        { id: 2, title: "Chocolade" }
      ]


    }
  }
  render() {
    const gItems = this.state.groceryItems.map(item => <ListItem key={item.id} value={item.title} item={item} />)
    const sItems = this.state.shoppingListItems.map(item => <ListItem key={item.id} value={item.title} item={item} />)
    return (
      <div>
        <h1>Boodschappenlijst</h1>
        <ul>
          {gItems}
        </ul>
        <h1>Winkelmand</h1>
        <ul>
          {sItems}
        </ul>
      </div>
    )
  }
}

export default Container