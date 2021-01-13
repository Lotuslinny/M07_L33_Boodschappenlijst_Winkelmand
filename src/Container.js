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