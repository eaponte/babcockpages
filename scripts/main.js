$(document).ready( function () {

	/***** Choose Random Header Image *****/

		let headerImages = ['header_1920x900_1.jpg', 'header_1920x900_2.jpg', 'header_1920x900_3.jpg'];
		let randomHeaderImage = 'images/header/' + headerImages[Math.floor(Math.random() * headerImages.length)];

		$('#top-banner').css('background-image', 'url(' + randomHeaderImage + ')');
	
	/***** Load listingsData *****/

		/***** Get Firebase ready for listingsData *****/

		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	  
		const firebaseConfig = {
			apiKey: "AIzaSyBzx4cCw-IDIqGSrpfj5bnM7_duLY59nn8",
			authDomain: "babcockpages-d1-to-firebase.firebaseapp.com",
			databaseURL: "https://babcockpages-d1-to-firebase-default-rtdb.firebaseio.com",
			projectId: "babcockpages-d1-to-firebase",
			storageBucket: "babcockpages-d1-to-firebase.appspot.com",
			messagingSenderId: "788415447974",
			appId: "1:788415447974:web:432bb0610401a1f8b00567",
			measurementId: "G-Z7HPF9FTY8"
		};

		// Initialize Firebase
        firebase.initializeApp(firebaseConfig);

		// Get database reference
        const dbChildRef = firebase.database().ref('1qMwDAjxVNh6Y2misdyEqqf-NyYoDr7czQf7RV8yfHiU');

        let listingsData;

		dbChildRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                // console.log(childSnapshot.val());
                listingsData = childSnapshot.val();
            });
            console.log(listingsData);

			function loadData() {

				// fontawesome icons
			
				let addressIcon = '<i class="fas fa-map-marker-alt"></i>';
				let phoneIcon = '<i class="fas fa-phone-volume"></i>';
				let emailIcon = '<i class="fas fa-envelope"></i>';
				let websiteIcon = '<i class="fas fa-globe-americas"></i>';
			
				// image data
				
				let placeholderImage = '1I8oyoT6JUOF_oyvYUgoQtJktS_FEwR4h';
				let listingImage;
			
				// first category in listingsData
			
				let currentCategory = listingsData[0].category;
				// console.log('current category: ' + currentCategory);
				let currentCategoryLowerCase = currentCategory.replace(/\s+/g, '').toLowerCase();
			
				let categoryTitle = '<h2 id="' + currentCategoryLowerCase + '" class="category-title">' + currentCategory + '</h2>';
				let categoryList = '<ul class="' + currentCategoryLowerCase + ' category-list"></ul>';
				$('#data-display').append(categoryTitle).append(categoryList);
			
				// Create Category Nav Items
			
				function createCatNavItem() {
					let catNavItem = 	'<li class="category-nav-item">' +
											'<a href="#' + currentCategoryLowerCase + '">' +
												currentCategory +
											'</a>' +
										'</li>';
					$('#category-nav-list').append(catNavItem);
				}
			
				createCatNavItem();
			
				// Generate listings
				
				console.log('Listing count: ' + listingsData.length);
			
				listingsData.map(entry => {
			
					if(entry.category) {
			
						// Listings
						listingImage = entry.image ? entry.image : placeholderImage;
			
						// Ad Listing
						if(entry.subcategory == 'ad_full_width') {
							listing = 	'<li class="item commercial-placement-full-width">' +
											'<a href="' + entry.website + '" target="_blank">' +
												'<img alt="Banner Placement" src="https://drive.google.com/uc?id=' + listingImage +
												'" />' +
											'</a>' +
										'</li>';
						} else if(entry.subcategory == 'ad_listing') {
							listing =	'<li class="item commercial-placement-listing">' +
											'<img alt="Listing Placement" src="https://drive.google.com/uc?id=' + listingImage +
											'" />' +
											'<span class="listing-desc">' + entry.comment + '</span>' +
											'<a href="' + entry.website + '" target="_blank">Shop Amazon Now</a>' +
										'</li>';
						} else if(entry.subcategory == 'gad_listing') {
							listing =	'<li class="item commercial-placement-listing gad">' +
											'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6924811521509568"crossorigin="anonymous">' + '</script>' +
									   		'<ins class="adsbygoogle"' +
											   'style="display:block; text-align:center;"' +
											   'data-ad-layout="in-article"' +
											   'data-ad-format="fluid"' + 
											   'data-ad-client="ca-pub-6924811521509568"' +
											   'data-ad-slot="9962749802">' +
											'</ins>' +
									        '<script>' + 
												'(adsbygoogle = window.adsbygoogle || []).push({});' +
									        '</script>' +
										'</li>';
						} else if(entry.subcategory == 'informational') {
							listing =	'<li class="item informational-listing">' +
											'<img alt="Listing Image" src="https://drive.google.com/uc?id=' + listingImage +
											'" />' +
											'<span class="listing-desc">' + entry.comment + '</span>' +
											'<a href="' + entry.website + '" target="_blank">View Now</a>' +
										'</li>';
						} else if(entry.subcategory == 'youtube') {
							// Youtube video
							listing =	'<li class="item video-listing">' +
											'<img alt="Video Thumbnail" src="https://i.ytimg.com/vi/' + entry.website +
											'/hqdefault.jpg" />' +
											'<span class="listing-desc">' + entry.comment + '</span>' +
											'<a href="https://www.youtube.com/watch?v=' + entry.website + '" target="_blank">Watch Video</a>' +
										'</li>';
						} else {
							// Regular Listings
							listing =   '<li class="item">' +
											'<div class="image">' +
												'<span class="field"><img alt="Listing Image" src="https://drive.google.com/thumbnail?id=' + listingImage + '" /></span>' +
											'</div>' +
											'<div class="info">' +
												'<span class="field name">' + entry.name + '</span>' +
												'<span class="field">' + entry.subcategory + '</span>' +
												'<span class="field">' + addressIcon + '<a href="' + entry.addressurl + '" target="_blank">' + entry.address + '</a></span>' +
												'<span class="field">' + phoneIcon + '<a href="tel:+1-' + entry.phone + '" target="_blank">' + entry.phone + '</a></span>' +
												'<span class="field">' + emailIcon + '<a class="nowrap" href="mailto:' + entry.email + '">' + entry.email + '</a></span>' +
												'<span class="field">' + websiteIcon + '<a class="nowrap" href="' + entry.website + '" target="_blank">' + entry.website + '</a></span>' +
											'</div>' +
											'<span class="field">' + entry.comment + '</span>' +
										'</li>';
						}
			
						if(entry.category === currentCategory) {
							// Listings
							$('.' + currentCategoryLowerCase).append(listing);
						} else {
							// New Category
							currentCategory = entry.category;
							currentCategoryLowerCase = currentCategory.replace(/\s+/g, '').toLowerCase();
							categoryTitle = '<h2 id="' + currentCategoryLowerCase + '" class="category-title">' + currentCategory + '</h2>';
							categoryList = '<ul class="' + currentCategoryLowerCase + ' category-list"></ul>';
							$('#data-display').append(categoryTitle).append(categoryList);
							$('.' + currentCategoryLowerCase).append(listing);
							// New Category Nav Items
							createCatNavItem();
						}
			
					} // end -- if(entry.category)
					
				})
			}

			loadData();
        });


	/***** Display Site After Delay *****/

		$('.container').delay(500).animate({ opacity: 1 }, 700);

	/***** Nav Bar *****/

		// Open Side Nav

		$('.open-nav').click(function() {
			$('#nav-menu-container').animate({right: '0'});
		});

		// Close Side Nav

		function closeNav() {
			$('#nav-menu-container').animate({right: '-100%'});
		}

		$('.close-nav').click(function() {
			if($('#category-nav-list').hasClass('open-cat-nav-list')) {
				toggleCategoryDropdown();
			}
			closeNav();
		});

		$('.nav-menu').on('click', 'li a', function() {
			if($('#category-nav-list').hasClass('open-cat-nav-list')) {
				toggleCategoryDropdown();
			}
			if($(window).width() < 577) {
				closeNav();
			}
		});

	/***** Categories Nav Dropdown Item *****/

		function toggleCategoryDropdown() {
			if($('#category-nav-list').hasClass('open-cat-nav-list')) {
				$('.category-nav-link .fas.fa-angle-down').css({'transform': 'rotate(0deg)'});
			} else {
				$('.category-nav-link .fas.fa-angle-down').css({'transform': 'rotate(180deg)'});
			}
			$('#category-nav-list').toggleClass('open-cat-nav-list');
		}

		$('.category-nav-link').click(function() {
			toggleCategoryDropdown();
		});

	/***** Smooth Scroll *****/

		$('.main-menu, #intro').on('click', "a[href^='#']", function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;

				// The optional number (800) milliseconds to scroll to the specified area
				$('html, body').animate({
						scrollTop: $(hash).offset().top - 65
					}, 800, function(){
				});
			} // End if
		});

});

