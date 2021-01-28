import React from "react"
import ShoppingList from "./components/ShoppingList"
import Cart from "./components/Cart"
console.log(888888888)
class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      shoppingItemsList: [
        { type: "Shoppinglist", id: 1, title: "Appels" },
        { type: "Shoppinglist", id: 2, title: "Pak melk" }
      ],
      cartItems: [
        { type: "Cartlist", id: 1, title: "Peren" },
        { type: "Cartlist", id: 2, title: "Chocolade" }
      ]
    }
    this.handleClickShoppingItem = this.handleClickShoppingItem.bind(this)
    //this.addItemToCart = this.addItemToCart.bind(this)
    console.log("hello")
  }
  handleClickShoppingItem = (event) => {
    const clickedItem = event.target.innerHTML;
    this.setState((prevState) => {
      //copy the items of the old cartItems
      const newCartItems = [...prevState.cartItems];
      //console.log("hello")
      // add item to the NewCartItems
      newCartItems.push(clickedItem);
      //console.log("hello")
      // create newState
      const newState = { prevState, cartItems: newCartItems };
      // create newState
      // create newState
      console.log("hello")
      return newState

    });
  }

  render() {
    return (
      <div>
        <h1>Boodschappenlijst </h1>
        <ShoppingList
          items={this.state.shoppingItemsList}
          handleClickShoppingItem={this.handleClickShoppingItem}
        //addItemToCart={this.handleClickShoppingItem}
        />
        <h1>Winkelmand</h1>
        <Cart items={this.state.cartItems} />
      </div >
    )
  }
}
export default Container

