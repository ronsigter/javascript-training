// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e){
  // Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if(!siteName || !siteUrl){
    alert('Please fill in the form');
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  // Validate the URL
  if(!validateForm(siteName,siteUrl)){
    return false;
  }
  /*
  // local Storage Test
  localStorage.setItem('test','Hellow World');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));
  */

  // Test if bookmark is null
  if(localStorage.getItem('bookmarks') === null){
    // init array
    var bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // set to localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else{
    // Get booksmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url){
  // Get booksmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // loop through bookmark
  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      // remove from array
      bookmarks.splice(i,1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch Bookmarks
function fetchBookmarks(){
  // Get booksmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += `
    <div class="well">
      <h3>${name}
        <a class="btn btn-warning" target="_blank" href="${url}">Visit</a>
        <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="#">Delete</a>
      </h3>
    </div>
    `;
  }
}

function validateForm(siteName, siteUrl){
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }

  return true;
}