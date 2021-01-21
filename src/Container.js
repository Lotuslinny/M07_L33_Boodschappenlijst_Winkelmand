import React from "react"
import ShoppingList from "./components/ShoppingList"
import Cart from "./components/Cart"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.shoppingItemsList = {
      shoppingListItems: [
        { type: "Shoppinglist", id: 1, title: "Appels" },
        { type: "Shoppinglist", id: 2, title: "Pak melk" }
      ]
    }
    this.state.cartItemsList = {
      cartItems: [
        { type: "Cartlist", id: 1, title: "Peren" },
        { type: "Cartlist", id: 2, title: "Chocolade" }
      ]
    }

    // make sure certain functions have correct this.
    this.addNewItemToCart = this.addNewItemToCart.bind(this)
    /* this.handleClick = this.handleClick.bind(this); */
  }
  addNewItemToCart(shoppingListItem) {
    this.cartItemsList = (prevState) => {
      //copy the cartItems of the old state
      const newCartItems = [...prevState, cartItems];
      //Add present to newPresents
      newCartItems.push(shoppingListItem);
      //create newState
      const newState = { ...prevState, cartItems: newCartItems };
      return newState;
    }
  }

  /* addNewItemToCart(item) {
    this.cartItemsList({
      cartItemsTitles: [...this.cartItemsList.cartItems].concat([item])
    });
  } */



  /* handleClick = (item) => {
    console.log(this.shoppingItemsList.shoppingListItems) */

  render() {
    return (
      <div>
        <h1>Boodschappenlijst </h1>
        <ShoppingList
          items={this.shoppingItemsList.shoppingListItems}
        />
        <h1>Winkelmand</h1>
        <Cart
          items={this.cartItemsList.cartItems} />
        {/* <button onClick={this.handleClick}>Click me</button> */}
      </div >
    )

  }
}

export default Container

