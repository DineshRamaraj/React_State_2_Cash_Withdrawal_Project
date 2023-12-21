// Write your code here
import './index.css'

const myFunction = props => {
  const {eachItem, onBalanceAmount} = props
  const {id, value} = eachItem

  const onAmount = () => {
    onBalanceAmount({id, value})
    // console.log(id)
    // console.log(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="list-item-button" onClick={onAmount}>
        {value}
      </button>
    </li>
  )
}

export default myFunction
