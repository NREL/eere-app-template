

    keyboardSubmit = function(selector) {
        $(selector).keypress(function(e){
            var code = e.keyCode || e.which;
            if (code == 13) {
                e.preventDefault();
                $(this).click()
            }
        });
    }
    addThisList = function(){
        $('.addthis_list').addClass('invisible');
        $('.addthis_button_508').attr('tabindex','0').click(function(){
            var list = $(this).siblings('.addthis_list');
            if(list.hasClass('show')) {
                $(this).siblings('.addthis_list').addClass('invisible').removeClass('show');
            } else {
                $(this).siblings('.addthis_list').removeClass('invisible').addClass('show');
            }
        });
        $('.addthis_list a').click(function(){
            $(this).parent('.addthis_list').removeClass('show').addClass('invisible');
            return true;
        });
        keyboardSubmit('.addthis_button_508');
    }


