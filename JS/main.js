// JavaScript for handling navigation menu and other interactions

// Open navigation menu
$(".openNav").click(function() {
    $("#menu").animate({ width: '260px' }, 50);
    $("#homecontent").animate({ marginLeft: "250px" }, 50);
});

// Close navigation menu
$(".close").click(function() {
    $("#menu").animate({ width: "0px" }, 50);
    $("#homecontent").animate({ marginLeft: "0px" }, 50);
});

// Toggle display for slider content
$("#Slider .toggle").click(function() {
    $(this).next().slideToggle();
    $("#Slider div").not($(this).next()).slideUp();
});

// Count characters in textarea for contact form
$("textarea").keyup(function() {
    let remaining = 100 - $(this).val().length;
    $("#count").text(remaining <= 0 ? "your available characters finished" : remaining + " Characters Remaining");
});
