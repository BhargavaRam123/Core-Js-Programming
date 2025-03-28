var dayofweek;
(function (dayofweek) {
    dayofweek[dayofweek["sunday"] = 0] = "sunday";
    dayofweek[dayofweek["monday"] = 1] = "monday";
    dayofweek[dayofweek["tuesday"] = 2] = "tuesday";
    dayofweek[dayofweek["wednesday"] = 3] = "wednesday";
    dayofweek[dayofweek["thursday"] = 4] = "thursday";
    dayofweek[dayofweek["friday"] = 5] = "friday";
    dayofweek[dayofweek["saturday"] = 6] = "saturday";
})(dayofweek || (dayofweek = {}));
function checkweekend(val) {
    return val === dayofweek.saturday || val === dayofweek.sunday;
}
console.log(checkweekend(dayofweek.sunday));
