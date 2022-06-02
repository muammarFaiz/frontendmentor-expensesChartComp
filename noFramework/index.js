const d = document
const userbalance = d.getElementById('userbalance')
const barscontainer = d.getElementById('barscontainer')
const bar = d.getElementsByClassName('bar')

const main = async () => {
  userbalance.innerHTML = 'Loading...'

  const x = await fetch('../data.json')
  const userdata = await x.json()
  userbalance.innerHTML = '$921.48'
  console.log(userdata);
  // console.log(barscontainer.children);
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