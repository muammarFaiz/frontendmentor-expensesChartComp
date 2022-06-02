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

const main = async () => {
  // userbalance.innerHTML = 'Loading...'
  // const x = await fetch('../data.json')
  // const userdata = await x.json()
  userbalance.innerHTML = '$921.48'
  console.log(userdata);
  const aa = barscontainer.children
  for(let i = 0; i < aa.length; i++) {
    const barchild = aa[i]
    const itsdata = userdata.find(obj => obj.day === barchild.className)
    if(itsdata) {
      const itstotal = barchild.children[0]
      const thebar = barchild.children[1]
      const theh1 = d.createElement('h1')
      theh1.innerHTML = `$${itsdata.amount}`
      itstotal.appendChild(theh1)
      // barchild.children[1].setAttribute('style', 'height: ')
    }
  }

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