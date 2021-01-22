

//========assignment===kilometerToMeter==========

function kilometerToMeter(kilometers) {
	return parseFloat((kilometers * 1000.00).toFixed(2));
}
kilometerToMeter(10);


//========assignment===budgetCalculator==========
function budgetCalculator(ghori, phone, laptop) {
    myGhori = 50 * ghori;
    myPhone = 100 * phone;
    myLaptop = 500 * laptop;
    
    total = myGhori + myPhone + myLaptop ;
    return total;
    
  }
  budgetCalculator(5,6,10);


//========assignment===hotelCost==========
  function hotelCost(day) {
    if(day >= 1 && day <= 10) {
      charge = day * 100;
    } 
    else if(day >= 11 && day <= 20) {
      charge = 1000 + ((day-10) * 80);
    } 
    else if(day >= 21) {
      charge = 1800 + ((day-20) * 50);
    }
    return charge; 
      
  }
  hotelCost(71);

  //========assignment===megaFriend==========
var friensList = ['Reduan','SamirBasak','Maruf','Fridulu','krishan'];

function megaFriend(){
    let lgth = 0;
    let longest ='';

    for (var i = 0; i < friensList.length; i++) {
    
        if (friensList[i].length > lgth) {
        lgth = friensList[i].length;
        longest = friensList[i];
        }
    }
    return longest;
}

megaFriend();
  