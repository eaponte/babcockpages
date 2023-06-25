$(document).ready( function () {

	/***** Load listingsData *****/

	loadData();
		
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
		
		console.log(listingsData);
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

});

