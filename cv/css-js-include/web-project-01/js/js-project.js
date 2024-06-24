function show_setting_source() {

    $('.button-setting-source').click(function() {
        // ĐÓNG TẤT CẢ BOX
        $('.setting-source').addClass('show');
        $('.button-setting-source').addClass('hidden');


    });
}

function close_setting_source() {

    $('.close-setting-source').click(function() {
        // ĐÓNG TẤT CẢ BOX
        $('.setting-source').removeClass('show');
        $('.button-setting-source').removeClass('hidden');


    });
}