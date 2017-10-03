let allReposUrl = 'https://api.github.com/orgs/HackYourFuture/repos';

let lable = document.createElement('h1');
lable.setAttribute('id', 'lable');
lable.innerHTML = 'HackYourFuture Repositories';
document.body.appendChild(lable);

let tools = document.createElement('div');
tools.setAttribute('id','tools');
document.body.appendChild(tools);

let button = document.createElement('button');
button.setAttribute('id', 'button');
button.innerHTML = 'Show all Repositories';
tools.appendChild(button);
button.onclick = function () {
     //alert('You have already clicked me');
     httpGetAsync(allReposUrl, setReposOnHtml);

}
let input = document.createElement('input');
input.setAttribute('id', 'textBox');
input.setAttribute('type', 'text');
input.setAttribute('value', '');
tools.appendChild(input);

let button1 = document.createElement('button');
button1.setAttribute('id', 'button');
button1.innerHTML = 'Show Contributers';
tools.appendChild(button1);
button1.onclick = function () {
     httpGetAsync(getUrl(), setContributersOnHtml);

}

let button2 = document.createElement('button');
button2.setAttribute('id', 'button');
button2.innerHTML = 'Go';
tools.appendChild(button2);
button2.onclick = function () {
     httpGetAsync(getUrl(), linkToRepo);

}

let div = document.createElement('div');
div.setAttribute('id', 'div');
document.body.appendChild(div);

let repos = document.createElement('div');
repos.setAttribute('id', 'repos');
div.appendChild(repos);

let oneRepo = document.createElement('p');
oneRepo.setAttribute('id', 'onerepo');
repos.appendChild(oneRepo);

let contributers = document.createElement('div');
contributers.setAttribute('id', 'conts');
div.appendChild(contributers);

let oneCont = document.createElement('p');
oneCont.setAttribute('id', 'onecont');
contributers.appendChild(oneCont);

function httpGetAsync(theUrl, callback) {
     let xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
               callback(xmlHttp.responseText);
          else if (xmlHttp.readyState != 4 && xmlHttp.status == 404)
               alert('Check your input\nPlease Enter Repositories name\nHint: you can click on Show all Repositories to get them');
     }
     xmlHttp.open("GET", theUrl, true);
     xmlHttp.send(null);

}

function getUrl() {
     let apiURL = 'https://api.github.com/repos/HackYourFuture/';
     apiURL += document.getElementById('textBox').value;
     return apiURL;
}


function setReposOnHtml(apiData) {
     let myObj = JSON.parse(apiData);
     let string = '';
     for (i in myObj) {
          if (myObj[i].name === "JavaScript3" || myObj[i].name === "Project" ||
               myObj[i].name === "HTML-CSS" || myObj[i].name === "Node.js" ||
               myObj[i].name === "databases" || myObj[i].name === "JavaScript" ||
               myObj[i].name === "Git" || myObj[i].name === "CommandLine" ||
               myObj[i].name === "React") {
               string += myObj[i].name + '<br>';
               oneRepo.innerHTML = string;
          }

     }

}

function linkToRepo(apiData) {
     let myObj = JSON.parse(apiData);
     window.open(myObj.html_url);
}

function setContributersOnHtml(apiData) {
     let myObj = JSON.parse(apiData);
     httpGetAsync(myObj.contributors_url, function (data) {
          let cont = JSON.parse(data);
          let string = 'Contributers for ' + document.getElementById('textBox').value + '<br>';
          for (i in cont) {
               string += cont[i].login + '<br>';
               oneCont.innerHTML = string;
          }
     });
}
