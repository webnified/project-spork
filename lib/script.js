$('document').ready(function () {
	
$(function () {
			var current = 0;
			var images = [
			 	 "img/media/slider/Beef Caldereta.jpg",
         	 "img/media/slider/Beef Crisp.jpg",
          	 "img/media/slider/Beef Ham.jpg",
		  	 "img/media/slider/Beef Mushroom.jpg",
		  	 "img/media/slider/Beef Steak Tagalog.jpg",
		  	 "img/media/slider/Beef Tapa.jpg",
		  	 "img/media/slider/Buko Pandan.jpg",
		  	 "img/media/slider/Corned Tenderloin Beef.jpg",
		  	 "img/media/slider/Bavarian Chicken.jpg",
		  	 "img/media/slider/Breaded Chicken w Mayo Dip.jpg",
		  	 "img/media/slider/Buffalo Chicken.jpg",
		  	 "img/media/slider/Chicken Adobo.jpg",
		  	 "img/media/slider/Chicken Ala Pobre.jpg",
		  	 "img/media/slider/Chicken Alfredo.jpg",
		  	 "img/media/slider/Chicken BBQ.jpg",
		  	 "img/media/slider/Chicken Cocktail.jpg",
		  	 "img/media/slider/Chicken Cordon Blue.jpg"

			];			

			function pictureRandom ( num ) {
				var list = $('li').get();				

				var firstElement = list.splice(num , 1)[0];
				var secondElement = list.splice(num + 3 , 1)[0];

				var firstImage = images.splice(rand(images.length) , 1);
				var secondImage = images.splice(rand(images.length) , 1);

				$(firstElement.children[0]).fadeOut(1500 , function () {
					images.push($(this).attr('src'));
					$(this).attr('src' , firstImage).fadeIn( 1500 );
				});
				$(secondElement.children[0]).fadeOut(1500 , function () {
					images.push($(this).attr('src'));
					$(this).attr('src' , secondImage).fadeIn( 1500 );
				});
			}
			
			setInterval(function () {	
				if (current == 4) current = 0;				
				pictureRandom(current);
				current ++;
			} , 4000);

			function rand ( limit ) {
				return Math.floor(Math.random() * limit);
			}
		});	

});
