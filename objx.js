var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false, 
    mileage: 8800
};

var miles = fiat.mileage;
if (miles < 2000) {
    buyIt();
}

fiat.mileage = 10000;
fiat.needsWashing = true;

if(fiat.year < 1965) {
    classic = true;
}
for (var i = 0; i < fiat.passengers; i++) {
    addPersonToCar();
}