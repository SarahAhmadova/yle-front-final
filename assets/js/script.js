$(document).ready(function () {

    $(".navbar-toggler").click(()=>{
        $(".sidebar .menu-box").css("transform","translateX(0)");
        $(".sidebar").fadeIn();
    })

    $(".sidebar .side-menu .dropdown>a").click(function (e) {
        e.preventDefault();
        let innerMenu = $(e.target).parents(".nav-item").find(".inner-menu");
        if (innerMenu.css("display") == "none") {
            $(e.target).parents(".nav-item").find(".inner-menu").slideDown();
            console.log(true);
        } else {
            $(e.target).parents(".nav-item").find(".inner-menu").slideUp();
            console.log("false");
        }
    });

    $(".sidebar .close-btn").click(function () {
        $(".sidebar .menu-box").css("transform","translateX(100%)");
        $(".sidebar").fadeOut();
    });



    if ($(".wow").length) {
        new WOW().init();
    }

    if ($('.SlectBox').length) {
        $('.SlectBox').SumoSelect();
    }

    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,

            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    let left = -70;
    let right = -70;

    $(window).scroll(function () {
        if ($(".search-area .shape1").length) {
            let circle1Left = $(".search-area .shape1").position().left;

            if ($(this).scrollTop() + 300 >= $(".search-area").offset().top && circle1Left < 16) {
                $(".search-form .shape1").css("left", left++);
                $(".search-form .shape2").css("right", right++);
            } else if ($(this).scrollTop() + 600 > $(".search-area").offset().top && circle1Left > -70) {
                $(".search-form .shape1").css("left", left--);
                $(".search-form .shape2").css("right", right--);
            } else {
                $(".search-form .shape1").css("left", -70);
                $(".search-form .shape2").css("right", -70);
            }
        }
    });


    var words = document.querySelectorAll('.text-rotator .word');
    var wordArray = [];
    var currentWord = 0;
    if (words.length) {
        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        changeWord();
        setInterval(changeWord, 4000);
    }


    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function () {
            nw[i].className = 'letter in';
        }, 340 + (i * 80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

});