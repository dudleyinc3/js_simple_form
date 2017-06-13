//Listen for submit

	document.getElementById('myForm').addEventListener('submit', saveBookmark); 
	

	function saveBookmark(e) {
		var siteName =document.getElementById('siteName').value;
		var siteUrl =document.getElementById('siteUrl').value;



		
	if(!siteName || !siteUrl){
			alert('add bookmark');
			return false;
		}	
		var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
		var regex = new RegExp(expression);

		if(!siteUrl.match(regex)){
			alert('please use valid url');
			return false;
		}
	




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
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }	else {
  		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  		bookmarks.push(bookmark);
   	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

document.getElementById('myForm').reset();
  		//refresh
  		fetchBookmarks();
		//prevent from submitting
		e.preventDefault();	
	}

	//delete bookmarks
	function deleteBookmark(url){
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		for(var i = 0; i < bookmarks.length; i ++) {
			if(bookmarks[i].url == url){
				bookmarks.splice(i, 1);
			}
		}
		//refresh storage after delete
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		fetchBookmarks();
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
													' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
													' <a onClick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
													'</h3>'+
													'</div>';
		}
	}



















