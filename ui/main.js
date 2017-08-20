console.log('Loaded!');

// Change content
var content = document.getElementById('main-text');

content.innerHTML = 'Javascript changed me!!';

//Move image
var img = document.getElementById('madi');

img.onclick = function () {
  img.style.marginLeft = '100px';  
};