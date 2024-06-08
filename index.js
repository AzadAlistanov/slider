let hotelsArr = [
  {
    city: 'Rostov-on-Don, "Admiral"',
    'apartment area': '81 m2',
    'repair time': '3.5 months',
    'repair cost': 'Upon request',
    image: 'images/image-1.jpg',
  },
  {
    city: 'Sochi, "Thieves"',
    'apartment area': '105 m2',
    'repair time': '4 months',
    'repair cost': 'Upon request',
    image: 'images/image-2.jpg',
  },
  {
    city: 'Rostov-on-Don, "Patriotic"',
    'apartment area': '93 m2',
    'repair time': '3 months',
    'repair cost': 'Upon request',
    image: 'images/image-3.jpg',
  },
]

const sliderWrap = document.querySelector('.slider-wrap');
const sliderArrowsLeft = document.querySelector('.slider__arrows_left');
const sliderArrowsRight = document.querySelector('.slider__arrows_right');
const sliderArrowsPoints = document.querySelector('.slider__arrows_points');
const sliderArrowsPointsArr = document.querySelector('.slider__arrows_points').querySelectorAll('rect');
let currentIndex = 0;

function getSlider(arr, count) {
  sliderWrap.innerHTML = '';

  let slider = document.createElement('div')
  slider.classList.add('slider');
  sliderWrap.appendChild(slider);

  let sliderNav = document.createElement('nav');
  sliderNav.classList.add('slider__nav');
  slider.appendChild(sliderNav);

  arr.forEach((a, i) => {
    let sliderNavArrLink = document.createElement('a');
    sliderNavArrLink.classList.add('slider__nav_link');
    if (i === count) {
      sliderNavArrLink.classList.add('slider__nav_active');
      sliderArrowsPointsArr[i].classList.add('opacity-active');

    } else {
      sliderNavArrLink.classList.remove('slider__nav_active');
      sliderArrowsPointsArr[i].classList.remove('opacity-active');
    }

    sliderNavArrLink.textContent = a.city;
    sliderNav.appendChild(sliderNavArrLink);
  })

  let sliderInner = document.createElement('div');
  sliderInner.classList.add('slider__inner');

  sliderInner.innerHTML = `
    <div class="slider__info">
      <h2>Completed projects</h2>
      <p class="slider__info_description">
        Only a small part of the work performed by our company is presented <br>
        on the site. For 14 years on in the construction <br>
        market we have made happy more than 1000 families
      </p>
      <ul class="slider__detail-info">
        <li>
          <h4>City:</h4>
          <p>${arr[count].city}</p>
        </li>
        <li>
          <h4>apartment area:</h4>
          <p>${arr[count]['apartment area']}</p>
        </li>
        <li>
          <h4>Repair time:</h4>
          <p>${arr[count]['repair time']}</p>
        </li>
        <li>
          <h4>Repair Cost:</h4>
          <p>${arr[count]['repair cost']}</p>
        </li>
        </ul>
      </div>
      <div class="slider__image">
        <img src="${arr[count].image}" alt="${arr[count].city}">
      </div>
      `
  slider.appendChild(sliderInner);
}

getSlider(hotelsArr, currentIndex);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('slider__nav_link')) {
    document.querySelectorAll('.slider__nav_link').forEach((link, i) => {
      if (link === event.target) {
        currentIndex = i;
        getSlider(hotelsArr, currentIndex);
      }
    })
  }

  if (event.target.classList.contains('point-opacity')) {
    sliderArrowsPointsArr.forEach((point, i) => {
      if (point === event.target) {
        currentIndex = i;
        getSlider(hotelsArr, currentIndex);
      }
    })
  }

  if (event.target.parentElement.classList.contains('slider__arrows_left')) {
    if (currentIndex <= hotelsArr.length && currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = hotelsArr.length - 1;
    }
    getSlider(hotelsArr, currentIndex);
  }

  if (event.target.parentElement.classList.contains('slider__arrows_right')) {
    if (currentIndex < hotelsArr.length - 1 && currentIndex >= 0) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
    getSlider(hotelsArr, currentIndex);
  }
})

