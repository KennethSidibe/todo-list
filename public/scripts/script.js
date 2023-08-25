$('.task-checkbox').change(function() {
    if ($(this).prop('checked')) {
        $(this).parent().last().css("text-decoration", "line-through");
    } else {
        $(this).parent().last().css("text-decoration", "none");
    }
});

$("#palette").click(function() {
    $('#modal-container').addClass('show');
});

$('#reset-changes').click(function() {
    $('#modal-container').removeClass('show');
});


function getCurrentDayFormatted() {
    const date = new Date();
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dayName = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];
  
    var dateText = `${dayName}, ${dayOfMonth} ${monthName}`;
    $('#currentDate').text(dateText);
}

var date = getCurrentDayFormatted();
  

$('.task-container').last().parent().addClass("pb-3");

$('.bg-images-container .col').click(function() {
    $('.bg-images-container .col').removeClass('select-border');
    $(this).addClass('select-border');
});

$('#apply-changes').click(function (){
    var userBackgroundColor = $('.select-border').children().css("background-color");
    console.log(userBackgroundColor);
    $('body').css('background-color', userBackgroundColor);
    $('#modal-container').removeClass('show');
});