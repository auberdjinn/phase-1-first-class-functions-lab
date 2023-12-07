

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function (y) {
        return x * y;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func)  {
    return func(arrayOfDrivers);
}