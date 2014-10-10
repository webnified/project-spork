//var msg = new SpeechSynthesisUtterance('hello');
//window.speechSynthesis.speak(msg);

(function(){
var app = angular.module('modal',[]);

app.controller('tabController',function(){
	this.css = {'background-color':'black',
				'color':'white',
				'border-radius':'5px'
				} 
	this.menuTab = 1;
	this.packageTab = 1;
	this.price = 1;
	this.setMenu = function(num){
		this.menuTab = num;
	};
	this.setPrice = function(num){
		this.price = num;
	};
	this.setPackage= function(num){
		this.packageTab = num;
		this.price = 1;
	};
	this.checkPackage = function(num){
		return this.packageTab === num;
	}
	this.checkMenu = function(num){
		return this.menuTab === num;
	}
	this.checkPrice = function(num){
		return this.price === num;
	}
});

})();
