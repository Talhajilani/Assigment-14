//  CHAPTER 31 - 34
//  QUESTION NO 01
// var date = new Date(); 
// document.write(date)

//  QUESTION NO 02
// var  months = ['January','feburary','march','april','may','june','july','august','septembet','october','november','december',]
// var a = new Date();
// var b = a.getMonth();
// var c = months[b]
// alert('current month : ' + c)

// QUESTION NO 03
// var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',]
// var a = new Date();
// var b = a.getDay();
// var c = days[b]
// var d = c.slice(0,3)
// alert(c + '\n' + d)

// QUESTION NO 04
// var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',]
// var a = new Date();
// var b = a.getDay();
// var c = days[b]
// if ( c === 'Monday' || c === 'Tuesday'){
//     alert('Its Fun Day')
// }else{
//     alert('Working day')
// }

// QUESTION NO 05
// var a = new Date();
// var b = a.getDate();
// if ( b <=16 ){
//     alert('First fifteen days of the month')
// }else{
//     alert('Last days of the month')
// }

//  QUESTION NO 06

// var todaydate = new Date();
// var date = new Date("Octocer 29, 2003")
// var a = new Date()
// var current = a.getTime()
// var date = date.getTime()
// var totalmillisec = (current-date)
// var date = new Date("Octocer 29, 2003")
// var a = new Date()
// var current = a.getTime()
// var date = date.getTime()
// var totalmint = (current-date)/(1000*60)
// document.write('current date: ', todaydate + '<br>','elapsed milliseconds since January 01 1970 : ', + totalmillisec +'<br>','elapsed minutes since 1 jan 1970: ',totalmint)

// QUESTION NO 07

// var time = prompt('Enter Time here');
// if (time >= 12){
//     alert('its pm')
// }
// else{
//     alert('its am')
// }

//  QUESTION NO 08

// var today = new Date("December 31, 2020");
// document.write('current date: ',today)

//  QUESTION NO 09

// var date = new Date()
// var ramazan = new Date("June 18, 2015");
// var total = (date-ramazan)/(1000*60*60*24)
// alert(total , ' days have past since june 18 2015')

// QUESTION NO 10
// var current = new Date()
// var date = new Date("June 18, 2015");
// var total = (current-date)/(1000*60)
// document.write('On referance day ',current,',' , '<br>',total,' seconds have passed since begining of 2015')

// QUESTION 11

// var current = new Date()
// current.setHours( current.getHours() - 1 );
// document.write('time one hour ago was ',current)

//  QUESTION NO 12

// var current = new Date()
// current.setFullYear( current.getFullYear() - 100 );
// document.write('100 years ago it was ',current)

// QUESTION NO 13

// var birthday = new Date(prompt('enter your birth year','your birth year is: '));
// var a = new Date()
// var current = a.getTime()
// var birth = birthday.getTime()
// var total = (current-birth)/(1000*60*60*24*30*12)
// document.write(Math.floor(total))

// QUESTION NO 14

// document.write("KE ELECTRIC BILL", '<br>');
// var names = "Talha"
// document.write("COSTUMER NAME: "+names + '<br>');
// var month = "October"
// document.write("MONTH: "+month + '<br>');
// var Noofunit = 512
// document.write("<br>NUMBERS OF UNITS: "+Noofunit + '<br>');
// var unitprice = 11.29
// var latepay = 200
// document.write('UNIT PRICE:' + unitprice + '<br>');
// var bill = (Noofunit*unitprice)
// document.write('AMOUNT PAYABLR WITHIN DUE DATE: RS ',+bill + '<br>',"LATE PAYMENT SURCHARGE: "+latepay + '<br>' , " AMOUNT PAYABLR WITHIN DUE DATE: RS "+(bill+latepay));
  

//  CHAPTER 34 - 38

// QUESTION NO 1

// function Date(){
//     var today = new Date();
//     document.write(today)
// }
// Date();

// QUESTION NO 02

// function greeting(){
//        var firstname = prompt('enter your first name: ')
//        var lastname = prompt('enter your last name: ')
//        alert('good morning: '+ firstname + ' ' + lastname)
// }
// greeting();

// QUESTION NO 05

// function square(){
//     var x2 = prompt('Enter number which you want to make square ','Your number is: ');
//     var a = x2 * x2
//     document.write('Square of your desired number is: ',+ a)
//     }
//     square();

// QUESTION NO 06

// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;}
//     else{
//         return n * factorial(n-1);
//     }
// }
// let n = 5;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// QUESTION NO 07
// function counts(num1,num2){
//     for (i= num1 ; i <=num2; i++ ){
//     document.write(i)
//     }
// }
// var num1 = prompt('Énter start number')
// var num2 = prompt('Énter End number')
// ans = counts (num1,num2)

// Q8

// var distance = +prompt("Enter distance between two cities in Km")
// function distance_meter(){
//     var dist_meter = distance*1000;
//     return dist_meter;
// }
// function distance_feet(){
//     var dist_feet = distance*3280.84;
//     return dist_feet;
// }
// function distance_inches(){
//     var dist_inches = distance*39370.1;
//     return dist_inches;
// }
// function distance_centimeters(){
//     var dist_centimeter = distance*100000;
//     return dist_centimeter;
// }
// document.write(`<h3>Distance in Meters is: ${distance_meter()} <br>Distance in feets is: ${distance_feet()} <br>Distance in Inches is: ${distance_inches()} <br>Distance in Centimeters is: ${distance_centimeters()}</h3>`);

// QUESTION 09
// function overTime(){
//     var OTP_PerHour = 12;
//     var Total_hours = Math.ceil(+prompt("Enter No of Hours the Emploee worked"));
//     var overTimeHours = Total_hours - 40;
//     if(Total_hours>40){
//         var OTP = overTimeHours*OTP_PerHour
//         return OTP;
//     }
//     else{
//         return "Sorry! over time pay can be have by working greater tha 40 Hours "
//     }
// }
// alert(overTime());

// CHAPTER 38 - 42

// QUESTION 1

// function Raise(a , b){
//     a = +prompt("Enter Number");
//     b = +prompt("Enter Power");
//     var c = Math.pow(a , b);
//     return c;
// }
// alert(Raise());

// QUESTION 2

// function Leap_Year(Year){
//     Year = prompt("Enter Year to check wheather the year is a leap year or not");
//     if(Year % 4 === 0){
//         alert("This is a leap Year");
//     }
//     else{
//         alert("This is not a leap year");
//     }
// }
// Leap_Year();

// QUESTION NO 03
//     var a = 5;
//     var b = 4;
//     var c = 3;
// function Perimeter(){
//     var S_primeter = (a + b + c)/2;
//     return S_primeter;
// }
// function AreaOfTriangle(){
//     var S = Perimeter();
//     var Area = S * (S - a) * (S - b) * (S - c);
//     return "Area of the triangle is: " + Area;
// }
// alert(AreaOfTriangle());

// QUESTION 4
// function Marks(){
    // var sub1 = +prompt("Enter marks in first Subject");
    // var sub1 = +prompt("Enter marks in second Subject");
    // var sub1 = +prompt("Enter marks in third Subject");
//     var avg = (sub1 + sub2 + sub3)/3;
//     return avg.toFixed(3);
// }
// function Percentage(){
//     var avg = Marks();
//     var per = avg/100*100;
//     return per.toFixed(3);
// }
// function Main_function(){
//     var marks = Marks();
//     var per = Percentage();
//     var Result = "Your Average Marks is: " + marks + "\n" + "Your Percentage is: " + per
//     return Result;
// }

// alert(Main_function());

// Q6

// function removeVowels( input ){
//     var input = prompt("Enter Some text");
//     return input.replace(/[aeiouAEIOU]/g, "");
// }
// alert(removeVowels());

// Q8

// var distance = +prompt("Enter distance b/w two cities in Km")
// function distance_meter(){
//     var dist_meter = distance*1000;
//     return dist_meter;
// }
// function distance_feet(){
//     var dist_feet = distance*3280.84;
//     return dist_feet;
// }
// function distance_inches(){
//     var dist_inches = distance*39370.1;
//     return dist_inches;
// }
// function distance_centimeters(){
//     var dist_centimeter = distance*100000;
//     return dist_centimeter;
// }
// document.write(`<h3>Distance in Meters is: ${distance_meter()} <br>Distance in feets is: ${distance_feet()} <br>Distance in Inches is: ${distance_inches()} <br>Distance in Centimeters is: ${distance_centimeters()}</h3>`);