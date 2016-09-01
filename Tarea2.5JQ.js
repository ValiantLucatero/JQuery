$(document).on("click",".lista",function(){
    $(this).parent().append("<ul><li><button class='lista'>Nueva lista</button><button class='elemento'>Nuevo elemento</button></li></ul>");
});
$(document).on("click",".elemento",function(){
    $(this).parent().append("<li>Nuevo xD</li>");
});
