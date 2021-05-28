var disableDates = ["21-05-2021", "07-05-2021", "09-05-2021","10-05-2021"];
      
$('.datepicker').datepicker({
    format: 'dd/mm/yyyy',
    beforeShowDay: function(date){
        dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        if(disableDates.indexOf(dmy) != -1){
            return false;
        }
        else{
            return true;
        }
    }
});