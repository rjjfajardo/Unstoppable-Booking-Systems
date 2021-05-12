//Check ALL
function checkAll(elem) {
    var id = $(elem).attr("id");
  
    $("#"+id).click(function () {
      $("." + id + "-option").prop('checked', $(this).prop('checked'));
    });
  }
  //SORT
  const list = document.querySelector('.list');
  const sort_price_btn = document.querySelector('.sort_price_btn');
  const sort_rate_btn = document.querySelector('.sort_rate_btn');
  const arrow = document.querySelector('#arrow');
  
  let list_items = [
    {
      title: 'Intermediate Car',
      sub_title: 'Nissan Sentra or similar',
      location: 'cebu',
      location_desc: 'In Terminal, Cebu Cebu, PH',
      price: '1399',
      feature: ['Unlimited Miles', 'Pay at Pick-up', 'Manual'],
      rate: 4
    },
    {
      title: 'Compact Car',
      sub_title: 'Toyota Vios or similar',
      location: 'manila',
      location_desc: 'In Terminal, Manila Manila, PH',
      price: '2544',
      feature: ['Unlimited Miles', 'Pay at Pick-up', 'Manual'],
      rate: 2
    },
    {
      title: 'Economy Car',
      sub_title: 'Toyota Vios or similar',
      location: 'cebu',
      location_desc: 'In Terminal, Cebu Cebu, PH',
      price: '2880',
      feature: ['Unlimited Miles', 'Pay at Pick-up', 'Manual'],
      rate: 3
    },
    {
      title: 'Compact Car',
      sub_title: 'Hyundai Accent or similar',
      location: 'cebu',
      location_desc: 'In Terminal, Cebu Cebu, PH',
      price: '1488',
      feature: ['Unlimited Miles', 'Pay at Pick-up', 'Manual'],
      rate: 1
    },
  ];
  let filter = {
    location: '',
    pickup_date: '',
    pickup_time: '',
    dropoff_date: '',
    dropoff_time: ''
  };
  
  let desc = false;
  //SORT BY BUTTONS
  sort_price_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'price', desc);
    displayList(array, filter);
    desc = !desc;
  });
  
  sort_rate_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'rate', desc);
    displayList(array, filter);
    
    desc = !desc;
  });
  
  function sort_array_by (array, sort, desc) {
    array.sort(function (a,b) {
      if (a[sort] < b[sort]) return -1;
      if (a[sort] > b[sort]) return 1;
      return 0;
    });
    if (desc) {
      array.reverse();
      arrow.classList.remove("arrow_down");
      arrow.classList.add("arrow_up");
    } else {
      arrow.classList.remove("arrow_up");
      arrow.classList.add("arrow_down");
    }
    
    return array;
  };
  
  
  function displayList(array = [], filters) {
    list.innerHTML = "";
  
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
  
      if(item.location == filters.location.toLowerCase()) {
        let item_element = document.createElement('div');
        item_element.classList.add('card', 'mb-3');
  
        //CARD HEADER
        let row_class = document.createElement('div');
        row_class.classList.add('row', 'g-0');
  
        let col_img_div = document.createElement('div');
        col_img_div.classList.add('col-md-4');
  
        let col_img = document.createElement('img');
        col_img.src = "#";
        col_img.alt = "...";
  
        // CARD BODY
        let item_element_body = document.createElement('div');
        item_element_body.classList.add('col-md-8');
  
        let item_card_body = document.createElement('div');
        item_card_body.classList.add('card-body');
  
        let card_row = document.createElement('div');
        card_row.classList.add('row');
        
        let card_col = document.createElement('div');
        card_col.classList.add('col');
        
        let card_title = document.createElement('h5');
        card_title.classList.add('card-title');
        card_title.innerText = item.title;
  
        let card_subtitle = document.createElement('p');
        card_subtitle.classList.add('card-text');
        card_subtitle.innerText = item.sub_title;
  
        let card_ul = document.createElement('ul');
        card_ul.classList.add('d-flex', 'car_feature');
  
        let card_feature = document.createElement('div');
        card_feature.classList.add('d-flex', 'align-items-center', 'features');
  
        for (let j = 0; j < item.feature.length; j++) {
          let feature = document.createElement('li');
          feature.innerText = item.feature[j];
          let check_svg = document.createElement('div');
          check_svg.classList.add('check_icon');
  
          card_feature.appendChild(check_svg);
          card_feature.appendChild(feature);
        }
        
        let price_col = document.createElement('div');
        price_col.classList.add("col-4");
  
        let price = document.createElement('h2');
        price.innerText = "₱" + item.price;
  
        let hr = document.createElement('hr');
  
        let car_location = document.createElement('div');
        car_location.classList.add('car_location');
        
        let location_txt = document.createElement('p');
        location_txt.innerText = item.location;
        // VIEW BUTTON
        let view_wrap = document.createElement('div');
        view_wrap.classList.add('col-8', 'ml-auto', 'view-wrapper');
  
        let btn_wrap = document.createElement('div');
        btn_wrap.classList.add('btn_wrapper');
  
        let btn_grid = document.createElement('div');
        btn_grid.classList.add('d-grid');
  
        let btn_view = document.createElement('button');
        btn_view.classList.add('btn', 'btn-primary');
        btn_view.setAttribute("type", "button");
        btn_view.innerText = "Search";
  
        item_element.appendChild(row_class);
        row_class.appendChild(col_img_div);
        col_img_div.appendChild(col_img);
        row_class.appendChild(item_element_body);
        item_element_body.appendChild(item_card_body);
        item_card_body.appendChild(card_row);
        card_row.appendChild(card_col);
        card_col.appendChild(card_title);
        card_col.appendChild(card_subtitle);
        card_col.appendChild(card_ul);
        card_ul.appendChild(card_feature);
  
        card_row.appendChild(price_col);
        price_col.appendChild(price);
  
        item_card_body.appendChild(hr);
  
        item_card_body.appendChild(car_location);
        car_location.appendChild(location_txt);
  
        item_card_body.appendChild(view_wrap);
        view_wrap.appendChild(btn_wrap);
        btn_wrap.appendChild(btn_grid);
        btn_grid.appendChild(btn_view);
  
        list.appendChild(item_element);
      }
    }
  }
  
  //SEARCH FILTER
  
  function onFormSubmit() {
    readFormData();
    displayList(list_items, filter);
  }
  
  function readFormData() {
    filter.location = document.getElementById("location_filter").value;
    filter.pickup_date = document.getElementById("pickup_date").value;
    filter.pickup_time = document.getElementById("pickup_time").value;
    filter.dropoff_date = document.getElementById("dropoff_date").value;
    filter.dropoff_time = document.getElementById("dropoff_time").value;
  }
  