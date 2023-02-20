function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;
 
  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();
 
  if ( isNaN(dateEnd) ) {
    return;
  }
 
  timer = setInterval(calculate, 1000);
 
  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
 
    if ( timeRemaining >= 0 ) {
      days    = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);
      hours   = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);
 
      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
 
  function display(days, hours, minutes, seconds) {}
}
 
countdown('05/31/2023 00:00:00 AM');




function validate(form,email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form].elements[email].value;
  if(reg.test(address) == false) {
    // alert('Введите корректный e-mail');
    $(document).ready(function() {
			$('.js-overlay-error').fadeIn();
		}); 
    return false;
  }
  else{
    // alert('e-mail введен верный');
    
    $.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
  }
}

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});






  




// Закрыть попап «спасибо»
$('.js-close-error').click(function() { // по клику на крестик
	$('.js-overlay-error').fadeOut();
});



