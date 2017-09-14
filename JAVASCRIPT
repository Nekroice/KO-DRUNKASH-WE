var mana = 0;

function manaClick(number){
    mana = mana + number;
    document.getElementById("mana").innerHTML = mana;
};

var fire = 0;

function fireClick(number){
    fire = fire + number;
    document.getElementById("fire").innerHTML = fire;
};

var ice = 0;

function iceClick(number){
    ice = ice + number;
    document.getElementById("ice").innerHTML = ice;
};

var earth = 0;

function earthClick(number){
    earth = earth + number;
    document.getElementById("earth").innerHTML = earth;
};


var ogunmage = 0;

function buyOgunmage(){
    var ogunmageCost = Math.floor(10 * Math.pow(1.1,ogunmage));     //works out the cost of this cursor
    if(mana >= ogunmageCost){                                   //checks that the player can afford the cursor
        ogunmage = ogunmage + 1;                                   //increases number of cursors
    	mana = mana - ogunmageCost;                          //removes the cookies spent
        document.getElementById('ogunmage').innerHTML = ogunmage;  //updates the number of cursors for the user
        document.getElementById('mana').innerHTML = mana;  //updates the number of cookies for the user
    };
	 var nextCost = Math.floor(10 * Math.pow(1.1,ogunmage));       //works out the cost of the next cursor
    document.getElementById('ogunmageCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


var ledmage = 0;

function buyLedmage(){
    var ledmageCost = Math.floor(10 * Math.pow(1.1,ledmage));     //works out the cost of this cursor
    if(mana >= ledmageCost){                                   //checks that the player can afford the cursor
        ledmage = ledmage + 1;                                   //increases number of cursors
    	mana = mana - ledmageCost;                          //removes the cookies spent
        document.getElementById('ledmage').innerHTML = ledmage;  //updates the number of cursors for the user
        document.getElementById('mana').innerHTML = mana;  //updates the number of cookies for the user
    };
	 var nextCost = Math.floor(10 * Math.pow(1.1,ledmage));       //works out the cost of the next cursor
    document.getElementById('ledmageCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


var zemqmage = 0;

function buyZemqmage(){
    var zemqmageCost = Math.floor(10 * Math.pow(1.1,zemqmage));     //works out the cost of this cursor
    if(mana >= zemqmageCost){                                   //checks that the player can afford the cursor
        zemqmage = zemqmage + 1;                                   //increases number of cursors
    	mana = mana - zemqmageCost;                          //removes the cookies spent
        document.getElementById('zemqmage').innerHTML = zemqmage;  //updates the number of cursors for the user
        document.getElementById('mana').innerHTML = mana;  //updates the number of cookies for the user
    };
	 var nextCost = Math.floor(10 * Math.pow(1.1,zemqmage));       //works out the cost of the next cursor
    document.getElementById('zemqmageCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


var ogun = 0;

function buyOgun(){
    var ogunCost = Math.floor(10 * Math.pow(1.1,ogun));     //works out the cost of this cursor
    if(fire >= ogunCost){                                   //checks that the player can afford the cursor
        ogun = ogun + 1;                                   //increases number of cursors
    	fire = fire - ogunCost;                          //removes the cookies spent
        document.getElementById('ogun').innerHTML = ogun;  //updates the number of cursors for the user
        document.getElementById('fire').innerHTML = fire;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,ogun));       //works out the cost of the next cursor
    document.getElementById('ogunCost').innerHTML = nextCost;  //updates the cursor cost for the user
};








window.setInterval(function(){
	
	manaClick(ogunmage);
	
}, 1000);

window.setInterval(function(){
	
	manaClick(ledmage);
	
}, 1000);

window.setInterval(function(){
	
	manaClick(zemqmage);
	
}, 1000);
