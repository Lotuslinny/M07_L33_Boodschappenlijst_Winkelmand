import React from "react"
import ShoppingList from "./components/ShoppingList"
import Cart from "./components/Cart"

console.log(88888888);

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
  handleClick = (e) => {
    console.log("I was clicked")
  }
  render() {
    return (
      <div>
        <h1>Boodschappenlijst </h1>
        <ShoppingList
          items={this.state.shoppingListItems}
        />
        <h1>Winkelmand</h1>
        <Cart
          items={this.state.cartItems} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default Container

/* class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
); */