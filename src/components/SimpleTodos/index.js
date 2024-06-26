import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    Tododlist: initialTodosList,
  }

  DeleteItems = id => {
    const {Tododlist} = this.state
    const filteredData = Tododlist.filter(eachItem => eachItem.id !== id)
    this.setState({Tododlist: filteredData})
  }

  render() {
    const {Tododlist} = this.state
    return (
      <div className="container">
        <div className="Card">
          <h1 className="main-heading">Simple Todos</h1>
          <ul className="unorderd-list">
            {Tododlist.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                key={eachItem.id}
                DeleteItems={this.DeleteItems}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
