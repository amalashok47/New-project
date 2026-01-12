
$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".main-menu").addClass("active")
        $(".bg-overlay").fadeIn()
    })
    
    $(".bg-overlay,.menu-close").click(function(){
        $(".main-menu").removeClass("active")
        $(".bg-overlay").fadeOut()
    })
})