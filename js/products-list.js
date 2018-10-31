$(document).ready(function(){

	$("tbody tr").empty();



	$.ajax({
		url: "https://parkland-csc175.github.io/csc175data/bestbuy/products-list.json",
	}).done(function(data){
		$.each(data.products, function(i, item){
			var newRow = $("<tr>");

			$(newRow).attr("class", item.productId);
			$("tbody").append(newRow);
			$("." + item.productId).append("<td>" + item.manufacturer + "</td>");
			$("." + item.productId).append("<td>" + item.name + "</td>");
			$("." + item.productId).append("<td>" + item.regularPrice + "</td>");
			
			var baseLink = "https://parkland-csc175.github.io/csc175data/bestbuy/product-details-";
			var productLink = $("<td>");
			var productAnchor = $("<a>");

			$(productAnchor).text("product-details");
			$(productAnchor).attr("id", item.sku);
			$(productAnchor).attr("href", "product-details.html?myid=" + $(productAnchor).attr("id"));
			$(productLink).append(productAnchor);
			$("." + item.productId).append(productLink);
		});
	});


});