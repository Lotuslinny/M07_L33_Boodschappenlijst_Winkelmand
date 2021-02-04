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
        { type: "Cartlist", id: 1, title: "Peren", amount: 1 },
        { type: "Cartlist", id: 2, title: "Chocolade", amount: 1 },
        { type: "Cartlist", id: 3, title: "Sperziebonen", amount: 1 }
      ],
      inputField: { value: "" },
    }
    this.handleClickShoppingItem = this.handleClickShoppingItem.bind(this)
    this.handleClickCart = this.handleClickCart.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.createNewShoppingItem = this.createNewShoppingItem(this)
  }
  handleChange = (event) => {
    return this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const inputValue = this.state.value
    event.preventDefault();
    this.setState((prevState) => {
      // get all current shoppingItemsList 
      const allCurrentShoppingItems = this.state.shoppingItemsList;
      // filter in shopping items for inputvalue
      const shoppingItemExists = allCurrentShoppingItems.filter(item => item.title === inputValue);
      // if array length is 0, then the item isnt yet available in the shoppinglist
      if (shoppingItemExists.length === 0) {
        const newShoppingItem = this.createNewShoppingItem(inputValue)
        //console.log(newShoppingItem);
        // push new item into the array 
        allCurrentShoppingItems.push(newShoppingItem);
        //console.log(allCurrentShoppingItems);
      }
      // create newState
      const newState = { ...prevState, shoppingItemsList: allCurrentShoppingItems };
      return newState
    });
  }
  createNewShoppingItem = (inputValue) => {
    // create new item
    const newShoppingItem = {
      type: "Shoppinglist",
      id: this.state.shoppingItemsList.length + 1,
      //key: this.state.id,
      title: inputValue
    }
    return newShoppingItem
  }
  handleClickCart = () => {
    this.setState({ cartItems: [] });
  }
  createNewItem = (clickedItem) => {
    // create new item
    const newItem = {
      type: "Cartlist",
      id: this.state.cartItems.length + 1,
      title: clickedItem,
      amount: 1
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
        //console.log("hello" + newItem)
        // push new item into the array 
        allCurrentCartItems.push(newItem);
        //console.log(allCurrentCartItems);
        const newState = { ...prevState, cartItems: allCurrentCartItems };
        return newState
      }
      /* else {
        (itemExists.length >= 1)
               
        itemExists.amount++

      } */
    });
  }
  render() {
    return (
      <div>
        <h1>Boodschappenlijst </h1>
        <ShoppingList
          items={this.state.shoppingItemsList}
          input={this.state.inputField}
          handleClickShoppingItem={this.handleClickShoppingItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        //createNewShoppingItem={this.createNewShoppingItem}
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

/* addAmountItem = (clickedItem) => {
  const newAmount =
    clickedItem.amount++;
  return newAmount
}; */