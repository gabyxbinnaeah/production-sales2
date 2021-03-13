var input = [];
input["A"] = 510;
input["B"] = 308;
input["C"] = 486;
input["D"] = 572;

var total = 0;
function totalProduction(){
    for(k in input){
        total+=input[k]
        console.log("Your product in shed" +k+ "is" +input[k]+" "+ "litres per day")
    }
    console.log("Total production" +total+ "litres per day")
}

var timeArray = [];

 timeArray["Weekly"] = 7;
 timeArray["Year"] = 366;
 timeArray["January"] = 31;
 timeArray["February"] = 29;
 timeArray["March"] = 31;
 timeArray["April"] = 30;
 timeArray["May"] = 31;
 timeArray["June"] = 30;
 timeArray["July"] = 31;
 timeArray["August"] = 31;
 timeArray["September"] = 30;
 timeArray["October"] = 31;
 timeArray["November"] = 30;
 timeArray["December"] = 31;
 function incomeOverTime(selling_price,time){
     income = timeArray[time]*selling_price*total
     console.log("Your" +time+"income for is" +income)
     return income;
 }

 totalProduction();
 incomeOverTime(366,"Year")
 diff();

 function diff(){
     for(k in timeArray){
         console.log("The difference is "+(incomeOverTime(49,k) - incomeOverTime(45,k)))
     }
 }
