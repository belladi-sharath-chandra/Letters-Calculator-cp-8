import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  onChange = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <form className="form">
            <h1 className="heading">Calculate the letters you enter</h1>
            <label htmlFor="input" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              onChange={this.onChange}
              id="input"
              placeholder="Enter the phrase"
            />
            <p className="count">No.of letters: {count}</p>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
