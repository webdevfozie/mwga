$(document).ready(function () {
	$('.main-slider__body').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000
		}),
		$('.portfolio-slider__body').slick({
			dots: true,
			arrow: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 4000,
			responsive: [{
					breakpoint: 960,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 630,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
})

window.addEventListener('DOMContentLoaded', () => {

	let tab = document.querySelectorAll('.tab'),
		tabsBody = document.querySelector('.tabs'),
		tabContent = document.querySelectorAll('.tab-text');

	hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('tab-active');
		}
	}

	hideTabContent(1);

	showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
			tab[b].classList.add('tab-active');
		}
	}

	tabsBody.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.classList.contains('tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	})

	//Плавный скролл
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 700,
		offset: 80
	});

	//Модальное окно
	const modalBody = document.querySelector('.modal_body'),
		closeBtn = modalBody.querySelector('.close-button'),
		modalBtn1 = document.querySelector('#modal-btn-1'),
		modalBtn2 = document.querySelector('#modal-btn-2'),
		html = document.querySelector('html');

	modalBtn1.addEventListener('click', () => {
		modalBody.classList.remove('hide');
		html.classList.add('nscroll');
	})

	modalBtn2.addEventListener('click', () => {
		modalBody.classList.remove('hide');
		html.classList.add('nscroll');
	})

	closeBtn.addEventListener('click', () => {
		modalBody.classList.add('hide');
		html.classList.remove('nscroll');
	})
	document.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.classList.contains('modal_body')) {
			modalBody.classList.add('hide');
			html.classList.remove('nscroll');
		}
	})

	//Magnific 
	$(document).ready(function () {
		$('.magnific-img').magnificPopup({
			type: 'image',
			// Delay in milliseconds before popup is removed
			removalDelay: 300,

			// Class that is added to popup wrapper and background
			// make it unique to apply your CSS animations just to this exact popup
			mainClass: 'mfp-fade'
		});
	});
});