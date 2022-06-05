const d = document
const userbalance = d.getElementById('userbalance')
const barscontainer = d.getElementById('barscontainer')
barscontainer.setAttribute('tabIndex', '0')
const totalperdayMod = (event) => {
  const elems = document.querySelectorAll('.totalperday')
  for (let i = 0; i < elems.length; i++) {
    const element = elems[i];
    if (event.key === 'Enter') {
      if (element.className === 'totalperday') {
        element.classList.add('showtotalday')
      } else {
        element.classList.remove('showtotalday')
      }
    }
  }
}
barscontainer.onkeydown = (event) => totalperdayMod(event);
const bar = d.getElementsByClassName('bar')
const userdata = [
  {"day": "mon", "amount": 17.45},
  {"day": "tue", "amount": 34.91},
  {"day": "wed", "amount": 52.36},
  {"day": "thu", "amount": 31.07},
  {"day": "fri", "amount": 23.39},
  {"day": "sat", "amount": 43.28},
  {"day": "sun", "amount": 25.48}
]

const PERCENTAGE_MULTIPLIER = 6.5
const LOWEST_HEIGHT = 1
const SET_TIMEOUT_DURATION = 50
const USER_BALANCE_STR = '$921.48'

const main = async () => {
  userbalance.innerHTML = USER_BALANCE_STR
  console.log(userdata);
  const aa = barscontainer.children

  for (let i = 0; i < 7; i++) {
    const totalperday = d.createElement('div')
    totalperday.classList.add('totalperday')
    const bar = d.createElement('div')
    bar.classList.add('bar')
    aa[i].appendChild(totalperday)
    aa[i].appendChild(bar)
  }

  // count total money and highest spending day
  let totalmoney = 0
  let highestN = 0
  for (let i = 0; i < userdata.length; i++) {
    const amount = userdata[i].amount
    totalmoney = totalmoney + amount
    if(amount > highestN) {
      highestN = amount
    }
  }
  
  // set time out to make animation with css transition
  setTimeout(() => {
    for(let i = 0; i < aa.length; i++) {
      const barchild = aa[i]
      const itsdata = userdata.find(obj => obj.day === barchild.className)
      if(itsdata) {
        const itstotal = barchild.children[0]
        const thebar = barchild.children[1]
        const theh1 = d.createElement('h1')
        theh1.innerHTML = `$${itsdata.amount}`
        itstotal.appendChild(theh1)
        const itsPercentage = (100 / (totalmoney / itsdata.amount)) * PERCENTAGE_MULTIPLIER
        const itsheight = LOWEST_HEIGHT + Math.round(itsPercentage)
        console.log(itsheight);
        thebar.setAttribute('style', `height: ${itsheight}px`)
        thebar.setAttribute('aria-label', 'thebar')
        if(itsdata.amount === highestN) {
          thebar.classList.add('highestbar')
        }
      }
    }
  }, SET_TIMEOUT_DURATION);

  for(let i = 0; i < bar.length; i++) {
    const itstotal = bar[i].previousElementSibling
    bar[i].addEventListener('mouseover', () => {
      itstotal.classList.add('showtotalday')
    })
    bar[i].addEventListener('mouseout', () => {
      itstotal.classList.remove('showtotalday')
    })
  }
}
main()