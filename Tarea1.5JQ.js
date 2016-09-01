$(document).mousemove(function(event){
    $("span").text("Se movio!");
});
$(window).resize(function(){
    $("body").css("background-color","gray");
});
$(document).scroll(function(){
    $("body").css("background-color","white");
});
$("input:first").blur(function(){
    alert("Este campo perdio focus");
});
$("input:first").change(function(){
    alert("Cambiaste el texto!");
});
$("input:odd").mouseenter(function(){
    $("input:odd").css("background-color", "blue");
});
$("input:odd").mouseleave(function(){
    $("input:odd").css("background-color", "white");
});
$("input:odd").focus(function(){
    alert("Este campo tiene focus");
});
$("input:first").keydown(function(){
    $("input:first").css("background-color", "black");
});
$("input:first").keypress(function(){
    $("input:first").css("background-color", "red");
});
$("input:first").keyup(function(){
    $("input:first").css("background-color", "white");
});
$("form").submit(function(){
    alert("Enviado");
});
$("button:first").click(function(){
    alert("Me picaste!");
});
$("button:last").dblclick(function(){
    alert("Me picaste x2!");
});
$("p").hover(function(){
    $("p").css("background-color", "yellow");
    }, function(){
		$("p").css("background-color", "white");
});
$("p").mousedown(function(){
	$("p").css("background-color","red");
});
$("p").mouseup(function(){
    $("p").css("background-color", "yellow");
});
$("span").mouseover(function(){
    $("span").css("background-color", "green");
});
$("span").mouseout(function(){
    $("span").css("background-color", "white");
});
