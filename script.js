$(document).ready(function ()
{
    var scroll_pos = 0;
    $(document).scroll(function ()
    {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < 450) {
            $("nav").css('background-color', 'transparent');
            $("nav").removeClass("shadow-sm");
            $("a.nav-link").css("color", "#fff");
            $("a.logo-black").addClass("d-none");
            $("a.logo-black").css("position", "left:1px;");
            $("a.logo-white").css("visibility", "visible");
            $("a.logo-black").css("visibility", "hidden");

        } else {
            $("nav").css('background-color', '#fff');
            $("nav").css("height", "80px");
            $("nav").addClass("shadow-sm");
            $("a.nav-link").css("color", "#000");
            $("a.logo-black").removeClass("d-none");
            $("a.logo-white").css("visibility", "hidden");
            $("a.logo-black").css("visibility", "visible");


        }
    });
});



const topButton = document.getElementById('top');
topButton.addEventListener("click", function ()
{
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", function ()
{
    let posY = window.scrollY;
    if (posY > 450) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
})