$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const personInput = $("input#person").val();
    const addressInput = $("input#address").val();
    const food = $("input:radio[name=food]:checked").val();
    const deliveryDate = $("input#deliveryDate").val();
    const favoriteColor = $("input#color").val();
    $(".person").text(personInput);
    $(".address").text(addressInput);
    $(".order").text(food);
    $(".deliveryDate").text(deliveryDate);
    $(".favoriteColor").text(favoriteColor);
    $(".receipt-showing").show();
  });
});