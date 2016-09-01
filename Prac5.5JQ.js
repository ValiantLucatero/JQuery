$(function() 
{
  $("#draggable").draggable();
  $("#droppable").droppable(
  {
    drop: function(event,ui) 
    {
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
          .html("Entregado!");
    }
  });
});
  $(function() {
    var Videojuegos = [
      "Halo",
      "COD",
      "Mass Effect",
      "Minecraft",
      "Resident Evil",
      "Assassins Creed",
      "Pokemon",
      "Titanfall",
      "Plants vs Zombies",
      "Spiderman",
      "Dying Light",
      "#IDARB",
      "Gears of War",
      "Battlefield",
      "Tom Clancys",
      "Far Cry",
      "Rabbids",
      "Mortal Combat",
      "Dead or Alive",
      "Final Fantasy",
      "Kingdom Hearts",
      "Metal Gear"
    ];
    $( "#tags" ).autocomplete({
      source: Videojuegos
    });
  });
