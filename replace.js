//I think this is where all the replacing code happens

//Crockford walk the dom method.
var walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

walk_the_DOM(document.body, function(node) {
  if(node.nodeType == 3) { //text node
    old_text = node.nodeValue;
    new_text = old_text.replace(/force/g,'horse').replace(/Force/g,'Horse').replace(/force/gi,'horse');
    node.nodeValue = new_text;
  }
});

console.log("loaded");