var createDIV = function(color, classes, element, isOnclick) {
  var div = document.createElement('div');
  div.style.cssText = 'background-color:' + color + ';';
  div.className = classes;
  div.textContent = color;
  element.appendChild(div);

  if (isOnclick) {
    div.addEventListener('click', function(){addMore(color)}, false);
  }
}

var generateColor = function() {
  return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
}

var startGrid = function() {

  var gridColors = document.getElementsByClassName('grid-colors')[0];

  for (var i = 0; i < 10; i++) {
    createDIV(generateColor(), 'color-box', gridColors, true);
  }

};

var addMore = function(clickedColor) {

  var color = '';

  if (clickedColor) {
    color = clickedColor;
  } else {
    color = document.getElementById('color').value;
  }

  createDIV(color, 'box', document.getElementsByTagName('main')[0]);

};
