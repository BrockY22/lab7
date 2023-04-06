// let course1 = {
//     code: "ACIT 1630",
//     name: "Database Systems",
// }
// let course2 = {
//     code: "ACIT 1420",
//     name: "Intro to Systems Admin",
// }
// let course3 = {
//     code:"MATH 1310",
//     name:"Technical Math for IT",
// }
// const courseList = [course1,course2,course3];
// let code;
// do {
//     code=prompt("Enter a 4-digit code");
// }
// while(isNaN(code) || code.length != 4);

// let courseFound = false;
// for (let course of courseList){
//     if(course.code.includes(code)){
//         console.log(`Yes I am taking the course ${course.code} - ${course.name}`);
//         courseFound = true;
//         break;
//     }
// }
// if(!courseFound){
//     let newCourse = {
//         code,
//         name: null,
//     }
//     courseList.push(newCourse);
//     console.log(courseList);
// }


function createCourseArray(){
    let courseArray=[];
  
    const courseRef = document.querySelector('.courseList');
    const titleList = courseRef.querySelectorAll('li p a');
    const dateList = courseRef.querySelectorAll('li p:nth-child(2)');
    
  
    for(let i=0;i < titleList.length;i++){
        let course = {
            code:"",
            date:""
        }
        course.code = titleList[i].textContent;
        course.date = dateList[i].textContent;
        courseArray.push(course);
    }
    for(course of courseArray){
        console.log(course);
    }
    return courseArray;
}
createCourseArray()