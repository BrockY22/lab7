let course1 = {
    code: "ACIT 1630",
    name: "Database Systems",
}
let course2 = {
    code: "ACIT1420",
    name: "Intro to Systems Admin",
}
let course3 = {
    code:"MATH 1310",
    name:"Technical Math for IT",
}
const courseList = [course1,course2,course3];

do {
    code = prompt("Enter a 4-digit code");
}
while(isNaN(code) || code.length != 4);