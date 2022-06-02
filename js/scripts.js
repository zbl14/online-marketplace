$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const personInput = $("input#person").val();
    const addressInput = $("input#address").val();
    const food = $("input:radio[pizza]:checked").val();
    const deliveryDate = $("input#deliveryDate").val();
    const favoriteColor = $("input#color").val();
    const result = personInput + " " + food;
    // const receipt = $("output#receipt"\).val();
    //$(".person").text(personInput);
    //$(".address").text(addressInput);
    //$(".food").text(food);
    //$(".deliveryDate").text(deliveryDate);
    //$(".favoriteColor").text(favoriteColor);
    $(".person").text(personInput);
    $(".address").text(addressInput);
    $(".food").text(food);
    $(".deliveryDate").text(deliveryDate);
    $(".favoriteColor").text(favoriteColor);
    $(".receipt").text(result);
    $(".receipt-showing").show();
  });
});