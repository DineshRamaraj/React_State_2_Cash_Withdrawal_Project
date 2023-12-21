// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class MyComponent extends Component {
  state = {amount: 2000}

  onBalanceAmount = props => {
    const {value} = props
    const {amount} = this.state

    if (amount >= value) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    }
    // console.log(id)
    // console.log(value)
    // console.log('hello')
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="image-and-name">
            <div className="author-icon">{initial}</div>
            <p className="author-name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="balance-amount">{amount}</p>
              <p className="balance-amount-rupees">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw-title">Withdraw</p>
            <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                onBalanceAmount={this.onBalanceAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyComponent
