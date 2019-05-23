// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hellow";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hellow';
// headerTitle.innerText = 'GoodBye';
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>HELLO<h3/>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME  //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hellow 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hellow 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR - FOR GRABBING ONE ITEM //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4pxx #ccc';

// var input = document.querySelector('input');
// input.value = 'Hellow World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL - FOR GRABBING MANY ITEMS //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'HEllow';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//  console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstchild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "HELLOW";
// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);


// Create a div
// var newDiv = document.createElement('div');
// add class
// newDiv.className = 'hello';
// add id
// newDiv.id = 'hellow1';
// add attribute
// newDiv.setAttribute('title', 'Hellow Div');
// create text node
// var newDivText = document.createTextNode('Hello World');
// add text to div
// newDiv.appendChild(newDivText);
// select the container
// var container = document.querySelector('header .container');
// select an element inside the container
// var h1 = document.querySelector('header h1');
// insert the element
// container.insertBefore(newDiv,h1);

// EVENTS: Click //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
  //console.log('Button Clicked');
  // document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f3f3f3';
  // console.log(e)
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);

  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3>';

  // console.log(e.type); // tpye of event

  // console.log(e.clientX+', '+e.clientY); // position from the window
  // console.log(e.offsetX+', '+e.offsetY); // position from the actual element

  // console.log(e.altKey); // return boolen by holding down a key
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
// }

// EVENTS: Mouse
// var button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent); // Parent element itself
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // any element inside
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// EVENT: KEYS

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('copy',runEvent);
// itemInput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent)
// select.addEventListener('input',runEvent)

form.addEventListener('submit',runEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);
  // document.body.style.display = 'none';

  console.log(itemInput.value);
  // console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
  // output.innerHTML = '<h3>MouseX: '+e.offsetX +'</h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";


}