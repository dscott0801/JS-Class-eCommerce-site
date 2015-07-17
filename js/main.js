//main js file

//debug shopping cart

var prodList=[
	{"name": "Polo Shirt",
	 "price": "$24.99",
	 "pic": "'img/poloShirt.jpg'",
	 "description":"Men&#39s Polo Shirt"
	}, 
	{"name": "Sundress",
	 "price": "$29.99",
	 "pic": "'img/sundress.jpg'",
	 "description":"Ladies&#39 Sundress"
	},
	{"name": "Shoes",
	 "price": "$74.99",
	 "pic": "'img/shoes.jpg'",
	 "description":"Men&#39s and Women&#39s Shoes"
	},
	{"name": "Blouse",
	 "price": "$18.99",
	 "pic": "'img/blouse.jpg'",
	 "description":"Women&#39s Blouse"
	},
	{"name": "Jeans",
	 "price": "$94.99",
	 "pic": "'img/jeans.jpg'",
	 "description":"Men&#39s and Women&#39s Jeans"
	}
]

var shoppingCart=[]

function toDelete(name){
	console.log("prod is clicked");
	var num;
	shoppingCart.forEach(function(ele, index){
		if (ele.name==name){
			num=index;
		}
	});
	console.log(num);
	shoppingCart.splice(num);
	console.log(shoppingCart);
}

$(document).ready(function(){
	//load all the products from the prodList to be displayed
	(prodList.forEach(function(ele, index){
		//feel free to style the div that I added here.
		var overlay = "<div class='overlay'><div class='caption'><h4 class='pull-right'>"+ele.price+"</h4><h4>"+ele.name+"</h4><p>"+ele.description+"</p><button type='button' class='btn btn-primary addToCart'>Add to Cart</button></div></div>";
		
		$("#prod").append("<div class='prodDisplay col-sm-4 col-lg-4 col-md-4'><p class='prodIndex'>"+index+"</p>"+overlay+"<div class='thumbnail'><img src="+ele.pic+"><div class='caption caption-hide'><h4 class='pull-right'>"+ele.price+"</h4><h4>"+ele.name+"</h4><p>"+ele.description+"</p><button type='button' class='btn btn-primary addToCart'>Add to Cart</button></div></div></div>");
	}));

	//add a product to the shopping cart
	$(".prodDisplay").click(function(e){
		e.preventDefault();
		var i=$(this).children().first().html();
		shoppingCart.push(prodList[i]); //test code
		//console.log(prodList[i].name);

		var newProd=shoppingCart[shoppingCart.length-1];

		$("#cartProd .row").append("<div class='col-sm-4 col-lg-4 col-md-4 cart-item'><div class='thumbnail'><img src="+newProd.pic+"><div class='caption'><h4 class='pull-right'>"+newProd.price+"</h4><h4>"+newProd.name+"</h4></div><button onclick='toDelete("+'"'+newProd.name+'"'+"); $(this).parent().remove()';><span class='cart-item-close'>X</span></button></div></div>");
	});

	//delay effect is not working
	$(".shopping-cart-collapse").click(function(e){
		e.preventDefault();
		if ($(".shopping-cart-expand").hasClass("expanded")){
			$(".shopping-cart-expand").attr("src", "img/arrowDown.png");
			$(".cartInner").toggleClass("hidden").delay(1000);
		} else {
			$(".shopping-cart-expand").attr("src", "img/arrowUp.png");
			$(".cartInner").toggleClass("hidden").delay(1000);
		}
		$(".shopping-cart-expand").toggleClass("expanded").delay(1000);
	});

	$(".clearAll").click(function(e){
		$(".cartInner").empty();
		shoppingCart=[];
	});
	
});