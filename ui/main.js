console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function() {
  // Create a request object
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter;
        }
    }  
  };
  
  if('withCredentials' in request) {
    request.withCredentials = true;
    request.open('GET', 'http://localhost:8080/counter', true);
  } else if (typeof XDomainRequest != "undefined") {
    request.open('GET', 'http://localhost:8080/counter');
  } else {
    request = null;
    console.log("CORS not supported!!!");
  }
  request.send(null);
};

<<<<<<< HEAD
=======

>>>>>>> 758e1471b6e9271b37ffb432202a385470091713
var submit = document.getElementById('submit');

/*submit.onclick = function() {
    
    var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var names = request.responseText;
            names = JSON.parse(names);
            var entry = '';
            for(var i = 0; i < names.length; i++) {
                entry += '<li>' + names[i] + '</li>';
            }
            var list = document.getElementById('namelist');
            list.innerHTML = entry;
        }
    }
  }; 
    var nametext = document.getElementById('name').value;
    request.open('GET', 'http://bandokabs.imad.hasura-app.io/submit-name/' + nametext, true);
    request.send(null);
};*/

submit.onclick = function() {
<<<<<<< HEAD
    
    var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var names = request.responseText;
            names = JSON.parse(names);
            var entry = '';
            for(var i = 0; i < names.length; i++) {
                entry = '<li>' + names[i] + '</li>';
            }
            list.innerHTML = entry;
        }
    }
  }; 
    var nametext = document.getElementById('name').value;
    var submitUrl = 'http://localhost:8080/submit-name/' + nametext;
    request.open('GET', submitUrl, true);
    request.send(null);
};
=======
    var firstname = document.getElementById('name').value;
    var list = document.getElementById('namelist');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
};
>>>>>>> 758e1471b6e9271b37ffb432202a385470091713
