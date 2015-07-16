//main js file

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

$(document).ready(function(){
	(prodList.forEach(function(ele, index){
		//feel free to style the div that I added here.
		$("#prod").append("<div class='prodDisplay col-sm-4 col-lg-4 col-md-4'><p class='prodIndex'>"+index+"</p><div class='thumbnail'><img src="+ele.pic+"><div class='caption'><h4 class='pull-right'>"+ele.price+"</h4><h4>"+ele.name+"</h4></div></div></div>");
	}));

	$(".prodDisplay").click(function(e){
		e.preventDefault();
		var i=$(this).children().first().html();
		shoppingCart.push(prodList[i]); //test code
		//console.log(prodList[i].name);

		shoppingCart.forEach(function(ele, index){
			$("#cartProd").append("<div class='col-md-12'><div class='row'><div class='col-sm-4 col-lg-4 col-md-4 cart-item'><div class='thumbnail'><img src="+ele.pic+"><div class='caption'><h4 class='pull-right'>"+ele.price+"</h4><h4>"+ele.name+"</h4></div><span class='cart-item-close'>X</span></div></div></div></div>");
		});
	});
/*
	(shoppingCart.forEach(function(ele, index){
		$("#cartProd").append("<div class='col-md-12'><div class='row'><div class='col-sm-4 col-lg-4 col-md-4 cart-item'><div class='thumbnail'><img src="+ele.pic+"><div class='caption'><h4 class='pull-right'>"+ele.price+"</h4><h4>"+ele.name+"</h4></div><span class='cart-item-close'>X</span></div></div></div></div>");
	}));*/

});
/*
<div class='col-md-12'>
                <div class='row'>
                    <div class='col-sm-4 col-lg-4 col-md-4 cart-item'>
                        <div class='thumbnail'>
                            <img src="+ele.pic+">
                                <div class='caption'>
                                    <h4 class='pull-right'>"+ele.price+"</h4>
                                    <h4>"+ele.name+"</h4>
                                </div>
                            <span class='cart-item-close'>X</span>
                        </div>
                    </div>
                </div>
            </div>
*/
//login

$('#toggle-in').click(function(){
  $('#login').toggle();
});