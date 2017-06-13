//Listen for submit

	document.getElementById('myForm').addEventListener('submit', saveBookmark); 
	

	function saveBookmark(e) {
		var siteName =document.getElementById('siteName').value;
		var siteUrl =document.getElementById('siteUrl').value;
			
		var bookmark = {

			name: siteName,
			url: siteUrl
		}

	/*local storage test*/
	/*	localStorage.setItem('test', 'Hello World');
		localStorage.getItem('test');
		localStorage.removeItem('test');
		console.log(localStorage.getItem('test'));
	*/

		 if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }	else {
  		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  		//add new bookmark to array
  		bookmarks.push(bookmark);
  		//set to local storage
   	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

		//prevent from submitting
		e.preventDefault();	
	}


	// Fetch bookmarks
	function fetchBookmarks(){
		//get from local storage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// Get output
		var bookmarksResults = document.getElementById('bookmarksResults');
		bookmarksResults.innerHTML = '';
		for(var i = 0; i < bookmarks.length; i ++){
			var name = bookmarks[i].name;
			var url = bookmarks[i].url;

			bookmarksResults.innerHTML += '<div class="well">' +
													'<h3>'+name+
													'</h3>'+
													'</div>';
		}
	}



















