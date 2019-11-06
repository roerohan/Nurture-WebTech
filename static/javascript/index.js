$(document).ready(function () {

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $("button.button").on('click', function (event) {
        var hash = $(this).data("hash");
        if (hash) {
            $('html, body').animate({
                scrollTop: $(document.getElementById(hash)).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

var nextHash = "";

function createDynamicURL() {
    if (currentHash === "" || currentHash === "#home") {
        nextHash = "aboutus"
    } else if (currentHash === "#aboutus") {
        nextHash = "services"
    } else if (currentHash === "#services") {
        nextHash = "health-calc"
    } else if (currentHash === "#health-calc") {
        nextHash = "health-facts"
    } else if (currentHash === "#health-facts") {
        nextHash = "faq"
    } else if (currentHash === "#faq") {
        nextHash = "bookapp"
    }

    if (nextHash) {
        $('html, body').animate({
            scrollTop: $(document.getElementById(nextHash)).offset().top
        }, 800, function () {
            window.location.hash = nextHash;
        });
    }
}


function isOnScreen(elem) {
    if (elem.length == 0) {
        return;
    }
    var $window = jQuery(window)
    var viewport_top = $window.scrollTop()
    var viewport_height = $window.height()
    var viewport_bottom = viewport_top + viewport_height
    var $elem = jQuery(elem)
    var top = $elem.offset().top
    var height = $elem.height()
    var bottom = top + height

    return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

var currentHash = "";

jQuery(document).ready(function () {
    window.addEventListener('scroll', function (e) {
        if (isOnScreen(jQuery('#home'))) {
            currentHash = "#home";
        } else if (isOnScreen(jQuery('#aboutus'))) {
            currentHash = "#aboutus";
        } else if (isOnScreen(jQuery('#services'))) {
            currentHash = "#services";
        } else if (isOnScreen(jQuery('#health-calc'))) {
            currentHash = "#health-calc";
        } else if (isOnScreen(jQuery('#health-facts'))) {
            currentHash = "#health-facts";
        } else if (isOnScreen(jQuery('#faq'))) {
            currentHash = "#faq";
        } else if (isOnScreen(jQuery('#bookapp'))) {
            currentHash = "#bookapp";
        }

        if (isOnScreen(jQuery('.contact-address'))) {
            $(".bottomArrow").hide();
        } else {
            $(".bottomArrow").show();
        }
    });
});

function replaceCard() {
    const donationForm = `<form action="/donate" method="POST">
                            <input name="name" type="text" class="m-4 pl-2" placeholder="Name">
                            <input name="phone" id="phone" onfocusout="validate()" type="text" class="m-4 pl-2" placeholder="Contact No."><br>
                            <input name="amount" type="text" class="m-4 pl-2" placeholder="Amount">
                            <input type="submit" value="Submit" class="mt-4 contact-email">
                            <div class="p-2 error-msg"></div>
                        </form>`;

    $(".donate-card").html(donationForm);
}

function validate() {
    const phone = $("#phone").val();
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("POST", "/validate", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xmlhttp.onreadystatechange = function () {
        const field = $(".error-msg");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            field.html(xmlhttp.responseText);
        } else {
            field.html("Error Occurred. Please reload.");
        }
    }
    xmlhttp.send(encodeURI(`phone=${phone}`));
}
