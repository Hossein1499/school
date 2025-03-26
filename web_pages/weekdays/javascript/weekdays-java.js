$(document).ready(function () {
    $('#play-1').click(function () {
        $('#weekdays-1').removeClass('d-none');
        $('#weekdays-2').addClass('d-none');
        $('#weekdays-3').addClass('d-none');
        $('#weekdays-4').addClass('d-none');
        $('#weekdays-5').addClass('d-none');
        $('#weekdays-6').addClass('d-none');
    });
    $('#play-2').click(function () {
        $('#weekdays-2').removeClass('d-none');
        $('#weekdays-1').addClass('d-none');
        $('#weekdays-3').addClass('d-none');
        $('#weekdays-4').addClass('d-none');
        $('#weekdays-5').addClass('d-none');
        $('#weekdays-6').addClass('d-none');
    });
    $('#play-3').click(function () {
        $('#weekdays-3').removeClass('d-none');
        $('#weekdays-1').addClass('d-none');
        $('#weekdays-2').addClass('d-none');
        $('#weekdays-4').addClass('d-none');
        $('#weekdays-5').addClass('d-none');
        $('#weekdays-6').addClass('d-none');
    });
    $('#play-4').click(function () {
        $('#weekdays-4').removeClass('d-none');
        $('#weekdays-1').addClass('d-none');
        $('#weekdays-3').addClass('d-none');
        $('#weekdays-2').addClass('d-none');
        $('#weekdays-5').addClass('d-none');
        $('#weekdays-6').addClass('d-none');
    });
    $('#play-5').click(function () {
        $('#weekdays-5').removeClass('d-none');
        $('#weekdays-1').addClass('d-none');
        $('#weekdays-3').addClass('d-none');
        $('#weekdays-4').addClass('d-none');
        $('#weekdays-2').addClass('d-none');
        $('#weekdays-6').addClass('d-none');
    });
    $('#play-6').click(function () {
        $('#weekdays-6').removeClass('d-none');
        $('#weekdays-1').addClass('d-none');
        $('#weekdays-3').addClass('d-none');
        $('#weekdays-4').addClass('d-none');
        $('#weekdays-5').addClass('d-none');
        $('#weekdays-2').addClass('d-none');
    });
})