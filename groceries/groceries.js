// Your Code Here!

gList = [];

$('form').on("click", ".submit", function() {
  console.log($(".item-text").attributes.val());
  gList.push($(".item-text").attributes.val());
});


for (var i = 0; i < gList.length; i++) {
  $(".listy ul").append("<li>" + glist[i] + "</li>");
}
