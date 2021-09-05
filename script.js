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
cdiv2.append(parentcontentdiv,parentcontentdiv1,parentcontentdiv2)
cdiv1.append(cdiv2)
pdiv.append(cdiv1)


document.body.append(pdiv)

//api docs link https://openexchangerates.org/
async function request() {
    let url = "https://openexchangerates.org/api/latest.json?app_id=8b9acf150bf546e1afa3e576038fc38e&symbols="
    let input1 = document.getElementById("in1").value;
    console.log(input1)
    let input2 = document.getElementById("in2").value;
    let input3 = document.getElementById("in3").value;
    console.log(`${url}${input1},${input2}`);
    let req = await fetch(`${url}${input1},${input2}`);
    let response = await req.json();
    let value1 = `${input1}`.toUpperCase();
    let value2 = `${input2}`.toUpperCase();
    let restxt = `${input2}`.toUpperCase();
    var result = await response.rates[value1]/ response.rates[value2];
    let result1 = await input3/result;
    result1 = result1.toFixed(2);
    audio.innerHTML = `${restxt}  ${result1}`;
}



