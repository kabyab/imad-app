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
  
  request.open('GET', 'http://bandokabs.imad.hasura-app.io/counter', true);
  request.send(null);
};

var namevar = document.getElementById('name');
var nametext = namevar.value;
var submit = document.getElementById('submit');
var list = document.getElementById('namelist');

submit.onclick = function() {
      list.append('<li>' + nametext + '</li>');
};