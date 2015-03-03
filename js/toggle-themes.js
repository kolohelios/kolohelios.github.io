// jQuery to toggle the themes on the site from "Dark" to "Light"
$(document).ready(function() {
    $("#themes").on("click", "#dark", function() {
        $(this).closest("body").css({"background-color": "#0a0a0a"});
        $(this).closest(".jumbotron").css({"color": "#cba3ff", "background-color": "#0a0a0a"});
        $("#light").closest("li").removeClass("active");
        $("#dark").closest("li").addClass("active");
    });
    $("#themes").on("click", "#light", function() {
        $(this).closest("body").css({"background-color": "#ffffff"});
        $(this).closest(".jumbotron").css({"color": "#000000", "background-color": "#cba3ff"});
        $("#light").closest("li").addClass("active");
        $("#dark").closest("li").removeClass("active");
    });
}); 