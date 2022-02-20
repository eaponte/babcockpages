$(document).ready( function () {

	/***** Choose Random Header Image *****/

		let headerImages = ['header_1920x900_1.jpg', 'header_1920x900_2.jpg', 'header_1920x900_3.jpg'];
		let randomHeaderImage = 'images/header/' + headerImages[Math.floor(Math.random() * headerImages.length)];

		$('#top-banner').css('background-image', 'url(' + randomHeaderImage + ')');
	

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

