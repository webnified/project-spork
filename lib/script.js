$('document').ready(function () {

	var delay = 4000;
	var prev_pos = [];
	var current_img = [];
	var usable_img = [];
	var counter = 0;

	setInterval(function () {
		changeImage.random();
	}, delay);
	
	
	var changeImage = {
		path : [
			 "img/Beef Cuisine/Beef Caldereta.jpg",
         	 "img/Beef Cuisine/Beef Crisp.jpg",
          	 "img/Beef Cuisine/Beef Ham.jpg",
		  	 "img/Beef Cuisine/Beef Mushroom.jpg",
		  	 "img/Beef Cuisine/Beef Steak Tagalog.jpg",
		  	 "img/Beef Cuisine/Beef Tapa.jpg",
		  	 "img/Beef Cuisine/Braised Beef.jpg",
		  	 "img/Beef Cuisine/Corned Tenderloin Beef.jpg",
		  	 "img/Chicken Cuisine/Bavarian Chicken.jpg",
		  	 "img/Chicken Cuisine/Breaded Chicken w Mayo Dip.jpg",
		  	 "img/Chicken Cuisine/Buffalo Chicken.jpg",
		  	 "img/Chicken Cuisine/Chicken Adobo.jpg",
		  	 "img/Chicken Cuisine/Chicken Ala Pobre.jpg",
		  	 "img/Chicken Cuisine/Chicken Alfredo.jpg",
		  	 "img/Chicken Cuisine/Chicken BBQ.jpg",
		  	 "img/Chicken Cuisine/Chicken Cocktail.jpg",
		  	 "img/Chicken Cuisine/Chicken Cordon Blue.jpg"
		  	 
		],

		getCurrentImg : function () {
			var counter = 0;
			usable_img.length = 0;
			current_img.length = 0;
			var list_img = $('li > img').get();
			for(var list in list_img) {
				current_img.push($(list_img[list]).attr('src'));
			}
			
				$.grep(this.path, function (el) {
					if($.inArray(el, current_img) == -1 ) usable_img.push(el);
				});

		},

		fadeOutList : function () {
			var list_li = $('.images-rotator > li');

			var current_list_pos = Math.floor(Math.random() * list_li.length);

			return list_li[current_list_pos];
		},

		randomImage : function () {

			return Math.floor(Math.random() * usable_img.length);
		},

		checkRandom : function ( position )  {
			var x = 0;
			if(usable_img.length > 0) {

				do {
					if(current_img[x] !== usable_img[position]) {

						if(counter === current_img.length) {
							prev_pos.push(usable_img[position]);
							usable_img = $.grep(usable_img, function (value) {
								return value!=current_img[x];
							});
							counter = 0;
							return true;
						}
						counter++;
					} else {
							
							var position = changeImage.randomImage();
							changeImage.checkRandom(position);
							counter = 0;
							
					}
					x++;
				}while(x <= current_img.length);

			} else {
				console.log("Call random again");
				prev_pos.length = 0;
				counter = 0;
				return false;
			}

		},

		random : function () {
			changeImage.getCurrentImg();
			var list_pos  = changeImage.fadeOutList();
			/*var image_pos  = changeImage.randomImage();
			$(list_pos).children().fadeOut(1000, function () {
				$(list_pos).children().attr('src', usable_img[image_pos]).fadeIn(2000);
			});
*/
			var image_pos  = changeImage.randomImage();
			var flag = changeImage.checkRandom(image_pos);
			
			if(flag === true) {
				var image_path = usable_img[image_pos];

					$(list_pos).children().fadeOut(1000, function () {
						$(list_pos).children().attr('src', usable_img[image_pos]).fadeIn(2000);
					});


			/*	var img = new Image();
				img.src = image_path;*/
				
				/*$(list_pos).children().attr('src', usable_img[5]).fadeOut();
				$(list_pos).html(img).fadeOut(7000);
				$(list_pos).html(img).fadeIn(5000);
*/
			} else {

				this.random();
			}

		}
	}

});
	