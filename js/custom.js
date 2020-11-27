$( document ).ready( function() {
	const menuHolder = document.querySelector( '#nav' );

	if ( menuHolder ) {
		const menu = new MmenuLight(
			menuHolder,
			'(max-width: 767px)',
		);

		menu.navigation( {
			selected: 'is-active',
			title: 'Menu',
			theme: 'dark',
		} );

		const drawer = menu.offcanvas( {
			position: 'left',
		} );

		document.querySelector( 'a[href="#nav"]' ).addEventListener( 'click', ( event ) => {
			event.preventDefault();
			drawer.open();
		} );
	}

	let $header = $( '.header' );
	$( window ).scroll( function() {
		let scroll = $( window ).scrollTop();

		if ( scroll >= 100 ) {
			$header.addClass( 'header--fixed' );
		} else {
			$header.removeClass( 'header--fixed' );
		}
	} );

	$( '.js-work-slider' ).slick( {
		rows: 0,
		dots: true,
		arrows: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	} )
} );
