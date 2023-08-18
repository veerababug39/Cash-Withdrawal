// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="container-1">
            <div className="initial-paragraph">
              <p className="paragraph-1">{initial}</p>
            </div>

            <p className="name-paragraph">{name}</p>
          </div>
          <div className="container-2">
            <p className="your-balance">YOUR BALANCE</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <div className="container-3">
            <p className="withdraw">WITHDRAW</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="details-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
