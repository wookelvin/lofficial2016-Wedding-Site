

var unslider = $('.gallery').unslider(
  {
    arrows:false
  });

$('.unslider-arrow').click(function(event) {
    event.preventDefault();

    if ($(this).hasClass('next')) {
      unslider.data('unslider')['next']();  
    } else {
      unslider.data('unslider')['prev']();  
    };
});

//smooth scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//countdown

var end = new Date('05/14/2016 10:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('daysleft_num1').innerHTML = '0';
            document.getElementById('daysleft_num2').innerHTML = '0';
            document.getElementById('daysleft_num3').innerHTML = '0';

            return;
        }
        var days = Math.floor(distance / _day);
        var daystring = days.toString();
      
        
        while(daystring.length < 3 ) {
          daystring = '0'+daystring;
        }
        console.log('days left'+daystring);
        document.getElementById('daysleft_num1').innerHTML = daystring[0];
        document.getElementById('daysleft_num2').innerHTML = daystring[1];
        document.getElementById('daysleft_num3').innerHTML = daystring[2];
        //var hours = Math.floor((distance % _day) / _hour);
        //var minutes = Math.floor((distance % _hour) / _minute);
        //var seconds = Math.floor((distance % _minute) / _second);

        //document.getElementById('countdown').innerHTML = days + 'days ';
        //document.getElementById('countdown').innerHTML += hours + 'hrs ';
        //document.getElementById('countdown').innerHTML += minutes + 'mins ';
        //document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

    //timer = setInterval(showRemaining, 1000);

showRemaining();
$(document).ready(function(){
      $('.parallax').parallax();
      $('#theForm').validate({
        address:{
          email:true,
          required:true
        }
      });
  
      guestcheck();
      numguests();
      $("#guest").change(function () {guestcheck();});
      $("#yesno").change(function() { numguests();});
      
      $("#name").on('input',function(){
        $("#name1").val($("#name").val());
      });
        
    $('#menubtn').click(function(){
      $('#fullmenu').toggleClass('menuopen');
      $('#menubtn').toggleClass('navbtntog');
    });
  
    $('#fullmenu li a').click(function(){
      $('#fullmenu').toggleClass('menuopen');
      $('#menubtn').toggleClass('navbtntog');
    });
  
  
    });
//$('.pax').stellar();

function numguests(){
  
  if ($("#yesno").val() == "yes"){ 
    $("#numguests").show();
    //$("#guest").addClass('required');
    $("#guest").removeClass('ignore');
    
    $("#group1").show();
    //$("#name1").addClass('required');
    $("#name1").removeClass('ignore');
    
    $("#mealoptions").show();
    
    $("#aller").show();
    guestcheck();
  }else{
    
    $("#numguests").hide();
    $("#guest").addClass('ignore');
    
    $("#mealoptions").hide();
    
    $("#group1").hide();
    //$("#name1").removeClass('required');
    $("#name1").addClass('ignore');
    $("#group2").hide();
    //$("#name2").removeClass('required');
    $("#name2").addClass('ignore');
    $("#group3").hide();
    //$("#name3").removeClass('required');
    $("#name3").addClass('ignore');
    $("#group4").hide();
    //$("#name4").removeClass('required');
    $("#name4").addClass('ignore');
    $("#group5").hide();
    //$("#name5").removeClass('required');
    $("#name5").addClass('ignore');
    $("#aller").hide();
  }
}


function guestcheck() {
  if ($("#guest").val() == 0){
    
    
    //$("#name1").addClass('required');
    $("#name1").removeClass('ignore');
    $("#name2").addClass('ignore');
    $("#name3").addClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    
    $("#group1").show();
    $("#group2").hide();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
    
  }else if ($("#guest").val() == 1){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").addClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
    
  }else if ($("#guest").val() == 2){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").hide();
    $("#group5").hide();
    
  }else if ($("#guest").val() == 3){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").removeClass('ignore');
    $("#name5").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").show();
    $("#group5").hide();
    
  }else if ($("#guest").val() == 4){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").removeClass('ignore');
    $("#name5").removeClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").show();
    $("#group5").show();
    
    
  }else{
        $("#name1").addClass('ignore');
    $("#name2").addClass('ignore');
    $("#name3").addClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    
    $("#group1").hide();
    $("#group2").hide();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
  }
}
