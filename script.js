//parent div
var pdiv = document.createElement('div')
pdiv.setAttribute('class', 'box')
//child div 1 which is an container
var cdiv1 = document.createElement('div')
cdiv1.setAttribute('class', 'container')
// child div 2 which defines the contents to flow in row wise
var cdiv2 = document.createElement('div')
cdiv2.setAttribute('class', 'row')
// parent content div which acts as cards
var parentcontentdiv = document.createElement('div')
parentcontentdiv.setAttribute('class', 'col-sm-4 col-md-4 col-lg-4 col-fluid')

var contentdiv = document.createElement('div')
contentdiv.setAttribute('class', 'box-center text-center')

var parentcontentdiv1 = document.createElement('div')
parentcontentdiv1.setAttribute('class', 'col-sm-4 col-md-4 col-lg-4 col-fluid')

var contentdiv1 = document.createElement('div')
contentdiv1.setAttribute('class', 'box-center text-center')

var parentcontentdiv2 = document.createElement('div')
parentcontentdiv2.setAttribute('class', 'col-sm-4 col-md-4 col-lg-4 col-fluid')

var contentdiv2 = document.createElement('div')
contentdiv2.setAttribute('class', 'box-center text-center')

var p1 = document.createElement('p')
p1.innerHTML = "From"
//creating input field
var in1 = document.createElement('input')
in1.setAttribute('type', 'text')
in1.setAttribute('id', 'in1')

var in2 = document.createElement('input')
in2.setAttribute('type', 'text')
in2.setAttribute('id', 'in2')

var in3 = document.createElement('input')
in3.setAttribute('type', 'text')
in3.setAttribute('id', 'in3')

//creating button
var button = document.createElement('button')
button.setAttribute("type", "button")
button.setAttribute("class", "btn btn-primary")
button.setAttribute("onclick", "request()")
button.setAttribute("style", "margin-left :10px;")
button.innerHTML = "submit <br>"

//p tag to show the result
var p = document.createElement("p")
p.setAttribute("id", "p1")
p.innerHTML = "To"

var p2 = document.createElement("p")
p2.setAttribute("id", "p2")
p2.innerHTML = "Amount"

//creating p tag which is later changes to audio tag post onclick
var audio = document.createElement("p")
audio.setAttribute("id", "audio")
audio.innerHTML = "Result"

var h1 = document.createElement('h1')
h1.innerHTML = " Currency convertor"

pdiv.append(h1)
contentdiv.append(p1)
contentdiv.append(in1)
contentdiv.append(p)
contentdiv1.append(p2)
contentdiv.append(in2)
contentdiv1.append(in3)
contentdiv1.append(button)
contentdiv2.append(audio)

parentcontentdiv.append(contentdiv)
parentcontentdiv1.append(contentdiv1)
parentcontentdiv2.append(contentdiv2)
cdiv2.append(parentcontentdiv)
cdiv2.append(parentcontentdiv1)
cdiv2.append(parentcontentdiv2)
cdiv1.append(cdiv2)
pdiv.append(cdiv1)


document.body.append(pdiv)

// async function getmean() {
//     var uri = (`https://api.dictionaryapi.dev/api/v2/entries/en/`)
//     let key = await document.getElementById("in1").value;
//     let keyword = await key.replaceAll(/\s/g, '')
//     console.log(keyword)
//     let data = await fetch(`${uri}${keyword}`)
//     let datajson = await data.json()
//     document.getElementById('p1').innerHTML =
//         "<p><b>Definition:</b>  " + datajson[0].meanings[0].definitions[0].definition + "</br></p>" +
//         "<p><b>Example: </b>  " + datajson[0].meanings[0].definitions[0].example + "</br></p>" +
//         "<p><b>synonyms: </b> " + datajson[0].meanings[0].definitions[0].synonyms[0] + "</br></p>" +
//         "<p><b>antonyms: </b> " + datajson[0].meanings[0].definitions[0].antonyms[0] + "</br></p>";
//     var link = datajson[0].phonetics[0].audio
//     console.log(link)
//     document.getElementById('audio').innerHTML = `<audio controls autoplay src=${link}> </audio>`
// }





async function request() {
    let url = "http://api.currencylayer.com/live?access_key=69ee96f9416d691c3b8425931e0c9809&currencies="
    let input1 = document.getElementById("in1").value;
    console.log(input1)
    let input2 = document.getElementById("in2").value;
    let input3 = document.getElementById("in3").value;
    console.log(`${url}${input1},${input2}`)
    let req = await fetch(`${url}${input1},${input2}`)
    console.log(req['quotes'])
    let response = await req.json()
    // console.log(response.quotes.USDAED)
    let value1 = `USD${input1}`.toUpperCase()
    console.log(value1)
    let value2 = `USD${input2}`.toUpperCase()
    let restxt = `${input2}`.toUpperCase()
    console.log(response.quotes[value1])
    let result = response.quotes[value1]/ response.quotes[value2]
    console.log(result)
    let result1 = input3/result
    console.log(result1)
    audio.innerHTML = `${restxt} ${result1}`
}


