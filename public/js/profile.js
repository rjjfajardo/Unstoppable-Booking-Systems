const tab_buttons = document.querySelectorAll(".tab_container .button_container button");
const tab_panels = document.querySelectorAll(".tab_container .tab_panel");

function showData() {
  $('#user_name').html(profile_info.fName + ' ' + profile_info.lName);
  $('#user_email').html(profile_info.Email);
  $('#user_phone').html(profile_info.Phone);
  $('#user_DoB').html(profile_info.DoB.Month + ' ' + profile_info.DoB.Day + ' ,' + profile_info.DoB.Year);
  $('#user_addressOne').html(profile_info.Address.AddressOne);
  $('#user_addressTwo').html(profile_info.Address.AddressTwo);
  $('#user_address_city').html(profile_info.Address.City + ', ' + profile_info.Address.Zip_Code);
  $('#user_address_country').html(profile_info.Address.Country);
  $('#licsense_no').html(profile_info.Licsense.License_no);
  $('#expry_date').html(profile_info.Licsense.DoE.Month + ' ' + profile_info.Licsense.DoE.Day + ', ' + profile_info.Licsense.DoE.Year);
}
function showPanel(panelIndex) {
  tab_buttons.forEach(function(node){
    node.style.backgroundColor = "";
    node.style.color = "";
    node.style.border = "";
  });

  tab_buttons[panelIndex].style.backgroundColor="#5D6C89";
  tab_buttons[panelIndex].style.color="white";
  tab_buttons[panelIndex].style.border="1px solid rgba(0, 0, 0, 0.5)";  

  tab_panels.forEach(function(node){
    node.style.display = "none";
  });
  tab_panels[panelIndex].style.display = "block";
}
function editBtn() {
  $('.info_edit').removeClass('hide');
  $('#edit_btn').addClass('hide');
  $('.user_data').addClass('hide');
}
function closeEdit() {
  $('.info_edit').addClass('hide');
  $('#edit_btn').removeClass('hide');
  $('.user_data').removeClass('hide');
}
function editData() {
  //NAME
  if($('#first_name').val() != '')
    profile_info.fName = $('#first_name').val();
  if($("#last_name").val() != '')
    profile_info.lName = $("#last_name").val();
  //EMAIL
  if($('#new_email').val() != '') {
    var email = $('#new_email').val();
    var c_n_email = $('#c_new_email').val();
    if(c_n_email == profile_info.Email) {
      profile_info.Email = email;
    } else {
      alert('Email does not match!');
    }
  }
  // PHONE
  if($('#new_phone').val() != '')
    profile_info.Phone = $('#new_phone').val();
  //BDAY
  profile_info.DoB.Month = $('#birth_month').val();
  var dob_day = $('#birth_day').val();
  var dob_year = $('#birth_year').val();
  if(dob_day != '' && (dob_day > 0 && dob_day <= 31))
    profile_info.DoB.Day = $('#birth_day').val();
  if(dob_year != '')
    profile_info.DoB.Year = $('#birth_year').val();
  //ADDRESS
  if($('#address_line_one').val() != '') {
    profile_info.Address.AddressOne = $('#address_line_one').val();
  }
  if($('#address_line_two').val() != '') {
    profile_info.Address.AddressTwo = $('#address_line_two').val();
  }
  if($('#new_city').val() != '') {
    profile_info.Address.City = $('#new_city').val();
  }
  if($('#zip_code').val() != '') {
    profile_info.Address.Zip_Code = $('#zip_code').val();
  }
  if($('#address_country').val() != '') {
    profile_info.Address.Country = $('#address_country').val();
  }
  //LICSENSE
  if($('#new_license').val() != '')
    profile_info.Licsense.License_no = $('#new_license').val();
  if($('#exp_month').val() != '')
    profile_info.Licsense.DoE.Month = $('#exp_month').val();
    alert(profile_info.Licsense.DoE.Month);
  if($('#exp_day').val() != '')
    profile_info.Licsense.DoE.Day = $('#exp_day').val(); 
  if($('#exp_year').val() != '')
    profile_info.Licsense.DoE.Year = $('#exp_year').val();


  closeEdit();
  showData();
  
}
showPanel(0);
showData();