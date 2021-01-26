import React from "react"
import ShoppingList from "./components/ShoppingList"
import Cart from "./components/Cart"

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
    //console.log("hello")
  }
  handleClickShoppingItem() {
    // if(props.item.type === "Shoppinglist")
    console.log("hello!")
  }
  /* addItemToCart(clickedItem) {
    //console.log("hello")
    this.setState(prevState => {

      //copy the cartItems of the old state.
      const newState = { ...prevState };
      newState.cartItems = [...prevState.cartItems, clickedItem];
      //add item to newState.cartItems
      newState.cartItems.push(clickedItem);

      //create newState
      const newCartItems = { ...prevState, cartItems: newState.cartItems }
      return newCartItems
    }); */
  //}
  render() {
    return (
      <div>
        <h1>Boodschappenlijst </h1>
        <ShoppingList
          items={this.state.shoppingItemsList}
          handleClickShoppingItem={this.handleClickShoppingItem}
        //addItem={this.addItemToCart}
        />
        <h1>Winkelmand</h1>
        <Cart items={this.state.cartItems} />

      </div >
    )
  }
}
export default Container

/* import React from "react"
import ShoppingList from "./components/ShoppingList"
import Cart from "./components/Cart"

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state.shoppingItemsList = {
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
/* }
 addNewItemToCart(shoppingListItem) {
   this.setState.cartItemsList = (prevState) => {
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

/* render() {
   return (
     <div>
       <h1>Boodschappenlijst </h1>
       <ShoppingList
         items={this.shoppingItemsList.shoppingListItems}
       />
       <h1>Winkelmand</h1>
       <Cart
         items={this.cartItemsList.cartItems} />
       {/* <button onClick={this.handleClick}>Click me</button> *//*}
</div >
)

}
}

export default Container

*/