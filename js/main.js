//updating js for salon

//remake site with js functions

//cilent wants people to be able to book appointments online

//work out details on what they want and approx budget

//work on timeline when to turn in and submit contract/invoice
//too many lines work on inheritance
//redesign logo
function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
  
    const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          if( data.media_type === 'image' ){
            document.querySelector('img').src = data.hdurl
          }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
          }
         
          document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });//more errors
        function getFetch(){
            const choice = document.querySelector('input').value
            console.log(choice)
          
            const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`
          
            fetch(url)
                .then(res => res.json()) // parse response as JSON
                .then(data => {
                  console.log(data)
                  if( data.media_type === 'image' ){
                    document.querySelector('img').src = data.hdurl
                  }else if(data.media_type === 'video'){
                    document.querySelector('iframe').src = data.url
                  }
                 
                  document.querySelector('h3').innerText = data.explanation
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });//more errorsfunction getFetch(){
                    const choice = document.querySelector('input').value
                    console.log(choice)
                  
                    const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`
                  
                    fetch(url)
                        .then(res => res.json()) // parse response as JSON
                        .then(data => {
                          console.log(data)
                          if( data.media_type === 'image' ){
                            document.querySelector('img').src = data.hdurl
                          }else if(data.media_type === 'video'){
                            document.querySelector('iframe').src = data.url
                          }
                         
                          document.querySelector('h3').innerText = data.explanation
                        })
                        .catch(err => {
                            console.log(`error ${err}`)
                        });//more errorsfunction getFetch(){
                            const choice = document.querySelector('input').value
                            console.log(choice)
                          
                            const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`
                          
                            fetch(url)
                                .then(res => res.json()) // parse response as JSON
                                .then(data => {
                                  console.log(data)
                                  if( data.media_type === 'image' ){
                                    document.querySelector('img').src = data.hdurl
                                  }else if(data.media_type === 'video'){
                                    document.querySelector('iframe').src = data.url
                                  }
                                 
                                  document.querySelector('h3').innerText = data.explanation
                                })
                                .catch(err => {
                                    console.log(`error ${err}`)
                                });//more errors