const d = document
const userbalance = d.getElementById('userbalance')
const barscontainer = d.getElementById('barscontainer')
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

  let totalmoney = 0
  let highestN = 0
  for (let i = 0; i < userdata.length; i++) {
    const amount = userdata[i].amount
    totalmoney = totalmoney + amount
    if(amount > highestN) {
      highestN = amount
    }
  }
  
  console.log(totalmoney); // 202.46
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