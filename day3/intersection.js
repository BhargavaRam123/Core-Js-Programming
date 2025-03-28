function createmember(name, salary, contact, role) {
    return {
        name: name,
        salary: salary,
        contact: contact,
        role: role
    };
}
var empl = createmember("bhargav", 323223, 32323, "deve");
console.log(empl);
