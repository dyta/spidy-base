$(document).ready(function () {
    //Package Slider
    $('.package-slider--').bxSlider({
        mode: 'horizontal',
        captions: true,
        controls: false,
        auto: false,
        infiniteLoop: false
    });

    //Review Slider
    $('.review-slider').bxSlider({
        mode: 'fade',
        captions: true,
        controls: false,
        auto: true,
    });

    //OS
    $('.card').click(function () {
        $('.card').removeClass('active');
        $(this).addClass('active');
    });

    //Datacenter
    $('.dtc-list').click(function () {
        $('.dtc-list').removeClass('active');
        $(this).addClass('active');
    });


    //Slider
    $("#student1").on("click", function (e) {
        e.preventDefault();
        $("#data-cpu").text(1);
        $("#data-memory").text(2);
        $("#data-disk").text(100);
        $("#cpu").slider({ id: "cpu", min: 1, max: 16, value: 1, step: 1 });
        $("#memory").slider({ id: "memory", min: 2, max: 64, value: 2, step: 2 });
        $("#disk").slider({ id: "disk", min: 100, max: 1000, value: 100, step: 100 });
        cal()
    });
    $("#student2").on("click", function (e) {
        e.preventDefault();
        $("#data-cpu").text(8);
        $("#data-memory").text(32);
        $("#data-disk").text(500);
        $("#cpu").slider({ id: "cpu", min: 1, max: 16, value: 8, step: 1 });
        $("#memory").slider({ id: "memory", min: 2, max: 64, value: 32, step: 2 });
        $("#disk").slider({ id: "disk", min: 100, max: 1000, value: 500, step: 100 });
        cal()
    });
    $("#student3").on("click", function (e) {
        e.preventDefault();
        $("#data-cpu").text(16);
        $("#data-memory").text(64);
        $("#data-disk").text(1000);
        $("#cpu").slider({ id: "cpu", min: 1, max: 16, value: 16, step: 1 });
        $("#memory").slider({ id: "memory", min: 2, max: 64, value: 64, step: 2 });
        $('#disk').slider({ id: "disk", min: 100, max: 1000, value: 1000, step: 100 });
        cal()
    });
    $("#cpu").slider({ id: "cpu", min: 1, max: 16, value: 1, step: 1 });
    $("#cpu").on("slide", function (e) {
        e.preventDefault();
        $("#data-cpu").text(e.value);
        cal()
    });
    $("#memory").slider({ id: "memory", min: 2, max: 64, value: 2, step: 2 });
    $("#memory").on("slide", function (e) {
        e.preventDefault();
        $("#data-memory").text(e.value);
        cal()
    });
    $("#disk").slider({ id: "disk", min: 100, max: 1000, value: 100, step: 100 });
    $("#disk").on("slide", function (e) {
        e.preventDefault();
        $("#data-disk").text(e.value);
        cal()
    });
    //Tooltops
    $('.fa-info-circle').tooltip()
    $('.fa-circle').tooltip()

    function cal() {
        var total = (parseFloat(document.getElementById("data-cpu").innerHTML) * 150 +
            parseFloat(document.getElementById("data-memory").innerHTML) * 10 +
            parseFloat(document.getElementById("data-disk").innerHTML) * 3.2) + 9;
        Number.prototype.format = function (n, x) {
            var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
            return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
        };
        $("#totalprice").text('฿' + total.format());
        return true;
    }
});