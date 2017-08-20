console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function() {
  // Create a request object
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if (request.readystate === XMLHttpRequest.DONE) {
        if (request.status === 304) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
  };
  
  request.open('GET', 'http://bandokabs.imad.hasura-app.io/counter', true);
  request.send(null);
};