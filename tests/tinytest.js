var setDomElement = function (domStr, testFunc) {
  var div = document.createElement('div');
  div.innerHTML = domStr;
  div.style.display = 'block';
  document.body.appendChild(div);
  var p = div.firstChild;
  testFunc.call(p);
  document.body.removeChild(div);
};

var setStylusClass = function (className, testFunc) {
  return setDomElement('<p class="stylus-' + className + '"></p>', testFunc);
};


Tinytest.add("stylus - rupture", function(test) {
  setStylusClass('rupture-aboveOneIsBlack', function () {
    test.equal(getStyleProperty(this, 'color'), "rgb(0, 0, 0)");
  });
});