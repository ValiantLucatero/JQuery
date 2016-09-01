function activa(){
	alert("Le pudiste picar!");
}
$("#uno").click(function(){
	$("body")
		.on("click","#tres",activa)
		.find("#tres")
		.text("piquele!")
});
$("#dos").click(function(){
	$("body")
		.off("click","#tres",activa)
		.find("#tres")
		.text("no le pique!")
});
