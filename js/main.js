//updating js for salon

//remake site with js functions

//cilent wants people to be able to book appointments online

//work out details on what they want and approx budget

//work on timeline when to turn in and submit contract/invoice
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`
//rework the code was crashing catch errors