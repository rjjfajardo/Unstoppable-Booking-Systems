const list = document.querySelector('.list');
const sort_price_btn = document.querySelector('.sort_price_btn');
const sort_rate_btn = document.querySelector('.sort_rate_btn');
const arrow = document.querySelector('#arrow');

//TEMPORARY DB
let list_items = [
  {
    title: 'Economic',
    type: 'economic',
    desc: 'You can add here your description',
    price: 1399,
    feature: ['Petrol', 'Luggages: 3', 'Seats: 4', 'Gear: Manual', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_167013_223963_R.jpg',
    rate: 4,
    id: 0
  },
  {
    title: 'Economic',
    type: 'economic',
    desc: 'You can add here your description',
    price: 1550,
    feature: ['Petrol', 'Luggages: 3', 'Seats: 4', 'Gear: Manual', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_167013_223963_R.jpg',
    rate: 4,
    id: 1
  },
  {
    title: 'Economic',
    type: 'economic',
    desc: 'You can add here your description',
    price: 2000,
    feature: ['Petrol', 'Luggages: 3', 'Seats: 4', 'Gear: Manual', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_167013_223963_R.jpg',
    rate: 4,
    id: 2
  },
  {
    title: 'Family',
    type: 'suv',
    desc: 'You can add here your description',
    price: 2544,
    feature: ['Luggages: 8', 'Seat: 7', 'Gear: Automatic', 'Diesel', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_166998_223964_R.jpg',
    rate: 2,
    id: 3
  },
  {
    title: 'Motorbike',
    type: 'bike',
    desc: 'You can add here your description',
    price: 2880,
    feature: ['License cat: A', 'Category: Enduro'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_177811_231949_R.jpg',
    rate: 3,
    id: 4
  },
  {
    title: 'Sport',
    type: 'sport',
    desc: 'You can add here your description',
    price: 1488,
    feature: ['Petrol', 'Luggages: 4', 'Seats: 5', 'Gear: Automatic', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_167011_223965_R.jpg',
    rate: 1,
    id: 5
  },
  {
    title: 'SUV',
    type: 'suv',
    desc: 'You can add here your description',
    price: 1488,
    feature: ['Luggages: 8', 'Seat: 5', 'Gear: Automatic', 'Diesel', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_168483_223966_R.jpg',
    rate: 1,
    id: 6
  },
  {
    title: 'Van/Camper',
    type: 'van',
    desc: 'You can add here your description',
    price: 1488,
    feature: ['Luggages: 8', 'Seat: 6', 'Gear: Automatic', 'Diesel', 'Clima'],
    img_url: 'https://s3.amazonaws.com/planyo/53322_176500_230676_R.jpg',
    rate: 1,
    id: 7
  }
];

$(document).ready(function() {
  let desc = false;
  let filters = {
    car_type : sessionStorage.getItem("car_type"),
    min_price : sessionStorage.getItem("min_price"),
    max_price : sessionStorage.getItem("max_price")
  };
  
  
  //SORT BUTTONS
  sort_price_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'price', desc);
    displayList(array, filters);
    if(desc) {
      $('#arrow').removeClass();
      $('#arrow').addClass('arrow_up');
    } else {
      $('#arrow').removeClass();
      $('#arrow').addClass('arrow_down');
    }
    desc = !desc;
  });

  sort_rate_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'rate', desc);
    displayList(array, filters);
    $('#arrow').removeClass();
    desc = !desc;
  });
    displayList(list_items, filters);
  });


  function sort_array_by (array, sort, desc) {
  array.sort(function (a,b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  });
  if (desc) {
    array.reverse();
  } 
  return array;
};
// DISPLAY
function displayList(array = [], filters) {
  list.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    if(item.type == filters.car_type.toLowerCase() && (item.price >= filters.min_price || item.price <= filters.max_price)) {
    
    let card_col = document.createElement('div');
    card_col.classList.add('col-lg-4', 'col-md-6');
    card_col.id = item.id;

    let card = document.createElement('div');
    card.classList.add('card');
    // CARD IMG
    let img = document.createElement('div');
    img.classList.add('card-img-top');
    img.style.backgroundImage = 'url('+item.img_url+')';
    // CAR TITLE
    let title_div = document.createElement('div');
    title_div.classList.add('card-body');

    let car_title = document.createElement('h5');
    car_title.classList.add('car_title');
    car_title.innerText = item.title;
    //UL
    let ul = document.createElement('ul');
    ul.classList.add('row');
    //LI
    for (let j=0; j < item.feature.length; j++) {
      let li = document.createElement('li');
      li.classList.add('col-auto', 'list-item');
      let feature = document.createElement('div');
      feature.classList.add('feature');
      let icon = document.createElement('div');
      icon.classList.add('icon');
      let feature_type = document.createElement('p');
      feature_type.innerText = item.feature[j];
      
      feature.appendChild(icon);
      feature.appendChild(feature_type);
      li.appendChild(feature);
      ul.appendChild(li);
    }
    //buttons
    let btn_wrap = document.createElement('div');
    btn_wrap.classList.add('button_wrap');

    let btn1 = document.createElement('a');
    btn1.classList.add('car-link');
    btn1.href = "#";
    btn1.innerText = 'Details';
    btn1.addEventListener("click", function(){
       view_detail(item.id);
    });
    let btn2 = document.createElement('a');
    btn2.classList.add('car-link');
    btn2.href = "#";
    btn2.innerText = 'Make Reservation';
    btn2.addEventListener("click", function() {
      make_reservation(item.id);
    })

    card_col.appendChild(card);
    card.appendChild(img);
    card.appendChild(title_div);
    title_div.appendChild(car_title);
    card.appendChild(ul);
    card.appendChild(btn_wrap);
    btn_wrap.appendChild(btn1);
    btn_wrap.appendChild(btn2);

    list.appendChild(card_col);
    }
  }
};

//VIEW DETAIL
function view_detail(detail_id) {
  sessionStorage.setItem("img", list_items[detail_id].img_url);
  sessionStorage.setItem("detail_title", list_items[detail_id].title);
  sessionStorage.setItem("detail_specs", JSON.stringify(list_items[detail_id].feature));

  window.location.href="detail.html";
};
RESERVATION
function make_reservation(offer_id) {
  window.location.href="reserve.html";
}