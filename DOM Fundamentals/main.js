var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form Submit Event
form.addEventListener('submit',addItem);
// Delete Event
itemList.addEventListener('click',removeItem);
// Filter Event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input Value
  var newItem = document.getElementById('item');
  // create new li element
  var li = document.createElement('li');
  // Add Class
  li.className = 'list-group-item';
  // Add text node with input value
  if(newItem.value !== ''){
    li.appendChild(document.createTextNode(newItem.value));
    // Create Delete button Element
    var deleteBtn = document.createElement('button');
    // Add Classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to itemList
    itemList.appendChild(li);
  }
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // get lis
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // Match the search to lis
    // if match, it will equal -1
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block'; // Match, SHOW
    } else {
      item.style.display = 'none'; // Mismatch, HIDE
    }
  });
}