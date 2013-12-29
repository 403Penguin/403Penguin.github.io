sliderInt = 1;
sliderNext = 2;

$(document).ready(function () {
    $("#banner>img#1").fadeIn(300);
    startSlider();
});

function startSlider() {
    count = $("#banner > img").size();

    loop = setInterval(function () {

        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }
        $("#banner > img").fadeOut(300);
        $("#banner > img#" + sliderNext).fadeIn(300);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 3000);
}

function prev() {
    newSlide = sliderInt - 1;
    showSlide(newSlide);
}

function next() {
    newSlide = sliderInt + 1;
    showSlide(newSlide);
}

function stopLoop() {
    window.clearInterval(loop);
}

function showSlide(id) {
    stopLoop();
    if (id > count) {
        id = 1;
    } else if (id < 1) {
        id = count;
    }
    $("#banner > img").fadeOut(300);
    $("#banner > img#" + id).fadeIn(300);

    sliderInt = id;
    sliderNext = id + 1;
    startSlider();
};

$("#banner > img").hover(
    function () {
        stopLoop();
    },
    function () {
        startSlider();
    }
);