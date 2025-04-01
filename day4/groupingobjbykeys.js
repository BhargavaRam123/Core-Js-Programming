function groupby(persons, key) {
    return persons.reduce(function (groups, elem) {
        var keyvalue = elem[key];
        console.log("hello");
        if (!groups[keyvalue]) {
            groups[keyvalue] = [];
        }
        groups[keyvalue].push(elem);
        console.log("keyvalue:", keyvalue);
        return groups;
    }, {});
}
var persons = [
    {
        name: "steve",
        age: 30
    },
    {
        name: "raj",
        age: 25
    },
    {
        name: "ram",
        age: 30
    },
    {
        name: "ravi",
        age: 25
    }
];
var final = groupby(persons, "age");
console.log(final);
