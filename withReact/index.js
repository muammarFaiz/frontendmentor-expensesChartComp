const e = React.createElement;
const {CSSTransition} = ReactTransitionGroup;

const bars = document.getElementById('barscontainer')
const userBalance = document.getElementById('userbalance');
userBalance.innerHTML = '$921.48'
const userdata = [
  { "day": "mon", "amount": 17.45 },
  { "day": "tue", "amount": 34.91 },
  { "day": "wed", "amount": 52.36 },
  { "day": "thu", "amount": 31.07 },
  { "day": "fri", "amount": 23.39 },
  { "day": "sat", "amount": 43.28 },
  { "day": "sun", "amount": 25.48 }
]
const PERCENTAGE_MULTIPLIER = 6.5
const LOWEST_HEIGHT = 1

class CreateBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalperdayClass: 'totalperday',
      barAttr: {},
      animate: false
    }
  }
  
  _updateBar = () => {
    let totalMoney = 0;
    let highestDay = 0;
    for (let i = 0; i < userdata.length; i++) {
      totalMoney += userdata[i].amount
      if(userdata[i].amount > highestDay) {
        highestDay = userdata[i].amount
      }
    }
    const percentage = (100 / (totalMoney / this.props.money)) * PERCENTAGE_MULTIPLIER
    const barHeight = LOWEST_HEIGHT + Math.round(percentage)
    this.setState(() => {
      const barAttr = {
        onMouseEnter: (e) => {
          this.setState((state, props) => {
            return { totalperdayClass: `${state.totalperdayClass} showtotalday` }
          })
        },
        onMouseLeave: (e) => {
          this.setState((state, props) => {
            const classList = state.totalperdayClass.split(' ')
            return {totalperdayClass: classList[0]}
          })
        },
        key: 'thebar'
      }
      if(highestDay === this.props.money) {
        barAttr.className = 'bar highestbar'
      } else {
        barAttr.className = 'bar'
      }
      return {barAttr: barAttr, barHeight: barHeight}
    })
  }

  componentDidMount() {
    // console.log('component did mount');
    console.log(CSSTransition);
    this._updateBar()
    this.setState({animate: true})
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.barAttr.style) {
      this.setState(prev => ({barAttr: {...prev.barAttr, style: { height: `${this.state.barHeight}px` }}}))
    } else {
      // console.log('style applied');
      // console.log(this.state);
    }
  }

  render = () => {
    return e(
      React.Fragment, null,
      e('div', { className: this.state.totalperdayClass }, e('h1', null, `$${this.props.money}`)),
      e(
        CSSTransition, { in: this.state.animate, timeout: 500, classNames: 'node' },
        e('div', this.state.barAttr)
      )
    )
  }
}

for (let i = 0; i < 7; i++) {
  const bar = bars.children[i];
  const root = ReactDOM.createRoot(bar)
  root.render(e(CreateBar, { money: userdata[i].amount }))
}