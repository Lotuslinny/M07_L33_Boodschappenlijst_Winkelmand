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
        { type: "Cartlist", id: 2, title: "Chocolade" },
        { type: "Cartlist", id: 3, title: "Sperziebonen" }
      ]
    }
    this.handleClickShoppingItem = this.handleClickShoppingItem.bind(this)
    this.handleClickCart = this.handleClickCart.bind(this)
  }
  handleClickCart = () => {
    console.log('hello')
    this.setState({ cartItems: [] });
  }
  createNewItem = (clickedItem) => {
    // create new item
    const newItem = {
      type: "Cartlist",
      id: this.state.cartItems.length + 1,
      title: clickedItem
    }
    return newItem
  }
  handleClickShoppingItem = (event) => {
    const clickedItemHTML = event.target;
    // get value from clicked item.
    const clickedItem = clickedItemHTML.innerText;
    // console.log(clickedItem)
    this.setState((prevState) => {
      // get all current cart items
      const allCurrentCartItems = this.state.cartItems;
      // filter in cart items for clickedItem value
      const itemExists = allCurrentCartItems.filter(item => item.title === clickedItem);
      // if array length is 0, then the item isnt yet available in the cart
      if (itemExists.length === 0) {
        const newItem = this.createNewItem(clickedItem)
        // push new item into the array 
        allCurrentCartItems.push(newItem);
        //console.log(allCurrentCartItems);
      };
      // create newState
      const newState = { prevState, cartItems: allCurrentCartItems };
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
        <Cart items={this.state.cartItems}
          handleClickCart={this.handleClickCart}
        />
      </div >
    )
  }
}
export default Container