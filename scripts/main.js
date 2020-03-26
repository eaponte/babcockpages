$(document).ready( function () {

	/***** Choose Random Header Image *****/

		/*let headerImages = ['10TflI8ln6_OrbPK9XjYJO95JNnKVZOOw', '1TvJzkiGfYFc2ANYzigTwvPatat_hgsqZ', '1S3PqwSTZjxhBaUTLWpiN4Yuqr1M0SYJq'];
		let randomHeaderImage = 'https://drive.google.com/uc?id=' + headerImages[Math.floor(Math.random() * headerImages.length)];*/

		let headerImages = ['header_1920x900_1.jpg', 'header_1920x900_2.jpg', 'header_1920x900_3.jpg'];
		let randomHeaderImage = 'images/header/' + headerImages[Math.floor(Math.random() * headerImages.length)];

		$('#top-banner').css('background-image', 'url(' + randomHeaderImage + ')');

	/***** Load Spreadsheet Data *****/

		loadData();

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

function loadData() {
	let spreadsheetID = '1qMwDAjxVNh6Y2misdyEqqf-NyYoDr7czQf7RV8yfHiU';
	let url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/od6/public/values?alt=json';

	$.getJSON(url, function(data) {

		// data from the listings spreadsheet
		let entry = data.feed.entry;
		// let length = entry.length;

		// first category in the spreadsheet

		let currentCategory = entry[0].gsx$category.$t;
		let currentCategoryLowerCase = currentCategory.replace(/\s+/g, '').toLowerCase();

		let categoryTitle = '<h2 id="' + currentCategoryLowerCase + '" class="category-title">' + currentCategory + '</h2>';
		let categoryList = '<ul class="' + currentCategoryLowerCase + ' category-list"></ul>';
		$('#data-display').append(categoryTitle).append(categoryList);

		// fontawesome icons

		let addressIcon = '<i class="fas fa-map-marker-alt"></i>';
		let phoneIcon = '<i class="fas fa-phone-volume"></i>';
		let emailIcon = '<i class="fas fa-envelope"></i>';
		let websiteIcon = '<i class="fas fa-globe-americas"></i>';

		// image data
		
		let placeholderImage = '1I8oyoT6JUOF_oyvYUgoQtJktS_FEwR4h';
		let listingImage;

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

		let listing;

		$(entry).each(function() {
			if(this.gsx$category.$t) {

				// Listings
				listingImage = this.gsx$image.$t ? this.gsx$image.$t : placeholderImage;

				// Ad Listing
				if(this.gsx$subcategory.$t == 'ad_full_width') {
					listing = 	'<li class="item commercial-placement-full-width">' +
									'<a href="' + this.gsx$website.$t + '" target="_blank">' +
										'<img alt="Banner Placement" src="https://drive.google.com/uc?id=' + listingImage +
										'" />' +
									'</a>' +
								'</li>';
				} else if(this.gsx$subcategory.$t == 'ad_listing') {
					listing =	'<li class="item commercial-placement-listing">' +
									'<img alt="Listing Placement" src="https://drive.google.com/uc?id=' + listingImage +
									'" />' +
									'<span class="listing-desc">' + this.gsx$comment.$t + '</span>' +
									'<a href="' + this.gsx$website.$t + '" target="_blank">Shop Amazon Now</a>' +
								'</li>';
				} else {
					// Regular Listings
					listing =   '<li class="item">' +
									'<div class="image">' +
										'<span class="field"><img alt="Listing Image" src="https://drive.google.com/thumbnail?id=' + listingImage + '" /></span>' +
									'</div>' +
									'<div class="info">' +
										'<span class="field name">' + this.gsx$name.$t + '</span>' +
										'<span class="field">' + this.gsx$subcategory.$t + '</span>' +
										'<span class="field">' + addressIcon + '<a href="' + this.gsx$addressurl.$t + '" target="_blank">' + this.gsx$address.$t + '</a></span>' +
										'<span class="field">' + phoneIcon + '<a href="tel:+1-' + this.gsx$phone.$t + '" target="_blank">' + this.gsx$phone.$t + '</a></span>' +
										'<span class="field">' + emailIcon + '<a class="nowrap" href="mailto:' + this.gsx$email.$t + '">' + this.gsx$email.$t + '</a></span>' +
										'<span class="field">' + websiteIcon + '<a class="nowrap" href="' + this.gsx$website.$t + '" target="_blank">' + this.gsx$website.$t + '</a></span>' +
									'</div>' +
									'<span class="field">' + this.gsx$comment.$t + '</span>' +
								'</li>';
				}
				
				if(this.gsx$category.$t === currentCategory) {
					// Listings
					$('.' + currentCategoryLowerCase).append(listing);
				} else {
					// New Category
					currentCategory = this.gsx$category.$t;
					currentCategoryLowerCase = currentCategory.replace(/\s+/g, '').toLowerCase();
					categoryTitle = '<h2 id="' + currentCategoryLowerCase + '" class="category-title">' + currentCategory + '</h2>';
					categoryList = '<ul class="' + currentCategoryLowerCase + ' category-list"></ul>';
					$('#data-display').append(categoryTitle).append(categoryList);
					$('.' + currentCategoryLowerCase).append(listing);
					// New Category Nav Items
					createCatNavItem();
				}
			}

		});

	});
}