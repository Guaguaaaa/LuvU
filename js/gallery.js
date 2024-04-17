$(document).ready(function() {

    // 点击图片显示大图
    $('.smallImage').click(function() {
        $(this).siblings(".overlay").show();
    });

    // 点击大图外部关闭大图
    $('.overlay').click(function(event) {
        if (!$(event.target).closest('.overlay-inner').length) {
            $(this).hide();
        }
    });
});