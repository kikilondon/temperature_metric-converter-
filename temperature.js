/****************TEMPERATURE METRIC CONVERTER****************************/

// // In which metric is the temperature you are converting?
// // C - Celsius
// // F - Fahrenheit
// // K - Kelvin

userMetric = prompt(`In which metric is the temperature you are converting?\nC - Celsius\nF - Fahrenheit\nK - Kelvin\nType only a capital letter, please`);
//console.log(userMetric); 
let Fahrenheit ="F";
let Celsius = "C";
let Kelvin ="K";

// 2. The user should then be asked to input the number they want to convert

userNumTemp = Number(prompt('What number would you like to convert?'));
//console.log(userTemperature);


// 3. the user should choose what they want to convert their current temperature to. 
// For example:
// To which metric would you like to convert the temperature?
// C - Celsius
// F - Fahrenheit
// K - Kelvin

newMetric = prompt(`To which metric would you like to convert the temperature?\nC - Celsius\nF - Fahrenheit\nK - Kelvin\nType only a capital letter, please`);
//console.log(newMetric);


//4. The program should be able to convert from any of the three metrics to any of the three metrics.
// The program should print out the answer in the following format:
// -273°C is 0K.

// Conversion formulae:
//  Celsius from:
//  Fahrenheit: C = (F -32) x 5/9
//  Kelvin: C = K - 273.15
if(userMetric == "F" && newMetric == "C"){
    console.log(`${userNumTemp}\xB0F is ${((userNumTemp -32) * 5/9).toFixed(1)}\xB0C`);
}

else if(userMetric == "K" && newMetric == "C"){
    console.log(`${userNumTemp}K is ${(userNumTemp - 273.15).toFixed(1)}\xB0C`);
}
// Fahrenheit from:
//  Celsius: F = C x 9/5 + 32
//  Kelvin: F = k x 9/5 - 459.67
  
else if(userMetric == "C" && newMetric == "F"){
    console.log(`${userNumTemp}\xB0C is ${(userNumTemp * 9/5 + 32).toFixed(1)}\xB0F`);
}

else if(userMetric == "K" && newMetric == "F"){
    console.log(`${userNumTemp}K is ${(userNumTemp * 9/5 - 459.67).toFixed(1)}\xB0F`);
}

// Kelvin from:
//  Celsius: K = C + 273.15
//  Fahrenheit: K = (F + 459.67) x 5/9

else if(userMetric == "C" && newMetric == "K"){
    console.log(`${userNumTemp}\xB0C is ${(userNumTemp + 273.15).toFixed(1)}K`);
}
else if(userMetric == "F" && newMetric == "K"){
    console.log(`${userNumTemp}\xB0F is ${((userNumTemp + 459.67) * 5/9).toFixed(1)}K`);
}
else{
    console.log(`There was an error understanding the request`);
}

