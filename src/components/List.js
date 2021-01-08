import React from "react"
import ListItem from "./ListItem"


class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" }
      ]
    }
  }
  render() {
    const listItems = this.state.groceryItems.map(item => <ListItem key={item.id} value={item.title} item={item} />)
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}


export default List