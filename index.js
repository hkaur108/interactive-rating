let x;

$('.btn').on('click', (e)=>{
    x=e.target.id;
    $('.btn').removeClass("active");
    $(this).addClass("active");
})

$('.submit-button').on('click',()=>{
    if(x){
    
        $(".thank-you-container").show();
        $(".final-rating").text(x)
        $('.first-box').hide();
    }
    else{
        alert('please select one of the ratings!')
    }
})