const data = [
  {
    "pageviews": "10K",
    "price": 8,
  },
  {
    "pageviews": "50K",
    "price": 12,
  },
    {
    "pageviews": "100K",
    "price": 16,
  },
    {
    "pageviews": "500K",
    "price": 24,
  },
  {
    "pageviews": "10M",
    "price": 36,
  },
    {
    "pageviews": "test",
    "price": "test",
  }
]

const price = document.querySelector('#price');
const pageviews = document.querySelector('#pageviews');
const slider = document.querySelector('#priceRange');

slider.addEventListener('input', (e) => {

    pageviews.innerText = `${data[e.target.value].pageviews} PAGEVIEWS`;

    price.innerText = `$ ${data[e.target.value].price}.00`;

})

// monthly / annual pricing toggle

var toggle = document.querySelector('#toggleSwitch');
var discount = document.querySelector('#discountLabel')
var displayed = false;

toggle.addEventListener('change', function () {
  if (this.checked){
    discount.classList.remove('not-displayed');
  } else {
    discount.classList.add('not-displayed');
  }
})




