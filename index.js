let x;
$(document).ready(()=>{
    $('.thank-you-container').hide();
})
$('.btn').on('click', function(e){
    x=e.target.id;
    console.log(e)
    $(this).toggleClass('active')
    $(this).css("background-color","white");
})

$('.submit-button').on('click',function(){
    if(x){
        $(".thank-you-container").show();
        $(".final-rating").text(x)
        $('.first-box').hide();
        $(this).css('background-color','white')
    }
    else{
        alert('please select one of the ratings!')
    }
})