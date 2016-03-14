// Your Code Here!

gList = [];

$('form').on("click", ".submit", function() {
  console.log($(".item-text").attributes.val());
  glist.push($(".item-text").attributes.val());
});


for (var i = 0; i < glist.length; i++) {
  $(".listy ul").append("<li>" + glist[i] + "</li>");
}
