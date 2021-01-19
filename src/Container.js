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
    this.cartItemsList = {
      cartItems: [
        { type: "Cartlist", id: 1, title: "Peren" },
        { type: "Cartlist", id: 2, title: "Chocolade" }
      ]
    }
  } handleClick = () => {
    console.log(this.shoppingItemsList.shoppingListItems)
  }
  onClickShoppingItems = (e) => {
    console.log(this.shoppingItemsList.shoppingListItems)
  }
  render() {
    return (
      <div>
        <h1>Boodschappenlijst </h1>
        <ShoppingList
          items={this.shoppingItemsList.shoppingListItems}
          shoppingItems={this.onClickShoppingItems()}
        />
        <h1>Winkelmand</h1>
        <Cart
          items={this.cartItemsList.cartItems} />
        <button onClick={this.handleClick}>Click me</button>
      </div >
    )
  }
} export default Container

/* class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
); */


