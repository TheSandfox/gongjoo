const floorSwiper = new Swiper('.floorinfo', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
	slidesPerView:3,
	autoplay: {
		delay: 3500,
	},
	// allowTouchMove : false,
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },
  
	// Navigation arrows
	navigation: {
        nextEl: 'floorinfo .swiper-button-next',
		prevEl: 'floorinfo .swiper-button-prev',
	},
  
	on: {
		activeIndexChange: (swiper)=>{
			swiper.slides.forEach(element => {
				element.classList.remove('active');
			});
			swiper.slides[swiper.activeIndex].classList.add('active');
		}
	}
	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});
// floorSwiper.init();