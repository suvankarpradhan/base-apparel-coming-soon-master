$('.ebtn').click(()=>{
    let email = $('.email-form input').val();
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailformat.test(email)){
        $('.email-form').css('border-color','hsl(0, 6%, 20%)');
        $('.error-msg').text('');
        $('.logo').removeClass('error');         
    }else{
        $('.email-form').css('border-color','hsl(0, 93%, 68%)');
        $('.error-msg').text('Please provide a valid email');
        $('.logo').addClass('error');       
    }
})