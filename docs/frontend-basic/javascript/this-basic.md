---
title: this
author: Closerdoor
date: '2021-12-12'
---

## this

## call bind apply

```html
<ul id="list" title="">
  <li>1 gdfhfdhgd</li>
  <li>2 gdfhfdhgd</li>
  <li>3 gdfhfdhgd</li>
  <li id="active">4 gdfhfdhgd</li>
  <li>5 gdfhfdhgd</li>
</ul>
<script>
var aLi = document.querySelectorAll('#list li');
var oActive = document.querySelector('#active');

//indexOf
console.log(aLi);

console.log(getElementIdx(aLi, oActive));

function getElementIdx(elements, item) {
  for (var i = 0, len = elements.length; i < len; i++) {
    if (item === elements[i]) {
      return i;
    }
  }
}
[].indexOf.call(aLi, oActive)
</script>
```