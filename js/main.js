//scrollTo function//
//====================================================================//
//when I click on nav element for class//
// $('.scrollTo-handler').click(myscrollTo);
// //browser scrolls to applicable class
// function myscrollTo() {
// 	console.log();
// 	$(window).scrollTo(
// 		$('.hero_world-history')
// 		);
// }

$('.main-nav-list li').click(myscrollTo);
//browser scrolls to applicable class
function myscrollTo() {
	console.log(event);
	$(window).scrollTo(
		$($(this).data('goto')),
		{duration: 800,
		offset: -70 }
		);
}

$('.hamburger').on('click', function() {
	$('.main-nav-list').slideToggle();
});
