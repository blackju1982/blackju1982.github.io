$(document).ready(function(){

	$(".row ul").empty();

	var baseUrl = "https://parkland-csc175.github.io/csc175data/bestbuy/";

	$.ajax({
		url: baseUrl + "categories-list.json",
	}).done(function(data){
		$.each(data.categories, function(i, item){
			var newLi = $("<li>");
			var aTag = $("<a>");

			$(newLi).attr("class", "mainCategory")
			$(aTag).attr("href", "#");
			$(aTag).attr("id", item.id);
			$(aTag).text(item.name);

			$(".row ul").append(newLi);
			$(newLi).html(aTag);
		});
		ParseSubcategories();
	});
	//loop through loadSubCategory passing it the <a> id
	function ParseSubcategories(){
		$(".mainCategory a").each(function(){
			loadSubCategory($(this).attr("id"));
		});
	}
	//load each .json for subcategory based on id and if possible create the html
	function loadSubCategory(id){
		$.ajax({
			url: baseUrl + "category-subcategories-" + id + ".json",
			success: function(data){
				//appending ul to attach subCategories
					var subCatUl = $("<ul></ul>");
					subCatUl.attr("class", id);
					$("#" + id).after(subCatUl);
				//toggle subCategories
					$("#" + id).click(function(){
						$("." + id).toggle();
					});
				//loop through subcategories here
				$.each(data.categories[0].subCategories, function(i, item){
					var newLi = $("<li>");
				 	var aTag = $("<a>");
				 //temp link to just the product list page should be a varibale link based on item.id
					$(aTag).attr("href", "products-list.html");
					$(aTag).attr("id", item.id);
					$(aTag).text(item.name);					
					$("." + id).append(newLi);
					$(newLi).html(aTag);
					$("." + id).hide();
				});
			}
		}).done(console.log("done"));
	}

	
});