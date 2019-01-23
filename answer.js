let plantsYear = {
    "earth" : 1,
    "mer" : 0.2408467,
    "ven" : 0.61519726,
    "mar" : 1.8808158,
    "jup" : 11.862615,
    "sat" : 29.447498,
    "uran" : 84.016846,
    "nept" : 164.79132 ,

};


function printAgeOnPlants (ageInSeconds) {
    for (var planet in plantsYear ){
        var mathStuff = ageInSeconds / 31557600 * plantsYear[planet];
           console.log("Your age on " +planet + " is " + mathStuff + " years");
    }

}