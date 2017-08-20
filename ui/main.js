console.log('Loaded!');

// Change content
var content = document.getElementById('main-text');

content.innerHTML = 'Javascript changed me!!';

//Move image
var img = document.getElementById('madi');
var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
  var interval = setInterval(moveRight, 50);  
};

/*
img.onclick = function () {
  img.style.marginLeft = '100px';  
};*/