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
let code;
do {
    code=prompt("Enter a 4-digit code");
}
while(isNaN(code) || code.length != 4);

for (let course of courseList){
    if(course.code == code){
        console.log(`Yes I am taking the course ${course.code} - ${course.name}`);
    }
    else{
        let newCourse = {
            code,
            name: null,
        }
        courseList.push(newCourse);
        console.log(courseList);
    }
}