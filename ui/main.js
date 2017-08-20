console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function() {
  // Create a request object
  var request = new XMLHttpRequest();
  alert('Linked');
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        alert('Entered');
        if (request.status === 200) {
            alert('Clicked');
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter;
        }
    }  
  };
  
  request.open('GET', 'http://bandokabs.imad.hasura-app.io/counter', true);
  request.send(null);
};