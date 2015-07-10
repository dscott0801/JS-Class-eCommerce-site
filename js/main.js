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
	 "pic": "'img/shoes.jpg'",
	 "description":"Women&#39s Blouse"
	},
	{"name": "Jeans",
	 "price": "$94.99",
	 "pic": "'img/jeans.jpg'",
	 "description":"Men&#39s and Women&#39s Jeans"
	}
]

$(document).ready(function(){
	//e.preventDefault();
	(prodList.forEach(function(ele, index){
		//feel free to style the div that I added here.
		$("#prod").append("<div class='col-sm-4 col-lg-4 col-md-4'><div class='thumbnail'><img src="+ele.pic+"><div class='caption'><h4 class='pull-right'>"+ele.price+"</h4><h4>"+ele.name+"</h4></div></div></div>");
	}));
});
