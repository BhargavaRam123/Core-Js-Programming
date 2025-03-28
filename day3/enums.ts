enum dayofweek{
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}

function checkweekend(val:dayofweek):boolean{
    
    return val === dayofweek.saturday || val===dayofweek.sunday
}
console.log(checkweekend(dayofweek.sunday))