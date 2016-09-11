ons.bootstrap();

    // Initialize the Firebase SDK
    firebase.initializeApp({
        apiKey: 'AIzaSyBj3JAk_l5OFAWZhj-UZn2fXLbVy5Lx3Yc',
    	databaseURL: 'https://go2gether-e78d4.firebaseio.com/'
    });
    

	// Create a new GeoFire instance
	firebaseRef = firebase.database().ref('makers');
	geoFire = new GeoFire(firebaseRef);
	
    
	geoQuery = geoFire.query({
    			center: [ 0, 0 ],
				radius: 1.0,
			});
    
    isFirstTime = true;
    
	// Select areas that are in the database
	var areas = firebase.database().ref('areas');
	/*
    $ul = $('ul#areas');
	areas.on('child_added', function(snapshot) {
		$ul.append('<li class="list-group-item" data-id="' + snapshot.key + '" data-latitude="' + snapshot.val().latitude + '" data-longitude="' + snapshot.val().longitude + '">' + snapshot.val().name + ' (' + snapshot.val().city + ', ' + snapshot.val().state + ')<i class="glyphicon glyphicon-remove pull-right"></i></li>');
	});	
	areas.on('child_removed', function(snapshot) {
		$ul.find('li[data-id="' + snapshot.key + '"]').remove();
	});
    */


  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '364003187320606',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  };
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log("Successful login");
      console.log("id(" + response.id + ") name(" + response.name + ") email("+ response.mail+")");
      //document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
        
    });
  }