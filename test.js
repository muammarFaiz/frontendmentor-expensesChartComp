const highest = 150
const lowest = 30
const key = 'use percentage of total expense in week'
const percentageMultiplier = 5.2
const listofmoney = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
let totalmoney = 0
listofmoney.forEach(n => {
  totalmoney = totalmoney + n
})
console.log(totalmoney);
const topercent = (index) => (100 / (totalmoney / listofmoney[index]))*5.2
const mondaypercent = topercent(0)
console.log(mondaypercent);
const height = (thepercent) => lowest + Math.round(thepercent)
const mondayheight = height(mondaypercent)
console.log(mondayheight);
const wedheight = height(topercent(2))
console.log(wedheight);
