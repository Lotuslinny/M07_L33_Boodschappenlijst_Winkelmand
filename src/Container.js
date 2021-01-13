import React from "react"
import ShoppingList from "./components/ShoppingList"
import Cart from "./components/Cart"


class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingListItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" }
      ],
      cartItems: [
        { id: 1, title: "Peren" },
        { id: 2, title: "Chocolade" }
      ]


    }
  }
  /* render() {
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
  } */
  render() {
    return (
      <div>
        <h1>Boodschappenlijst</h1>
        <ShoppingList items={this.state.shoppingListItems} />
        <h1>Winkelmand</h1>
        <Cart items={this.state.cartItems} />
      </div>
    )
  }
}

export default Container