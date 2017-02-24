//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var secretMenu = document.getElementsByClassName("name");
for(var i = 0;i<secretMenu.length;i++){
secretMenu[i].addEventListener("click", showSecret);

}

function showSecret(){
	var theGoods = this.querySelectorAll(".menu")[0];
	if(theGoods.style.display === "none"){
		theGoods.style.display = "block";
	}else{
		theGoods.style.display = "none";
	}
}