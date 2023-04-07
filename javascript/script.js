const courseRef = document.querySelector('.courseList');
const liRef = document.querySelectorAll('.courseList li');
const titleList = courseRef.querySelectorAll('li p a');
const dateList = courseRef.querySelectorAll('li p:nth-child(2)');

function createCourseArray(){
    let courseArray=[];
    for(let i=0;i < titleList.length;i++){
        let course = {
            code:"",
            date:""
        }
        course.code = titleList[i].textContent;
        course.date = dateList[i].textContent;
        courseArray.push(course);
    }
    return courseArray;
}

function findCourse(courseList){
    let code;
    let validateCode;
    do {
        validateCode=true;
        code=prompt("Enter a 4-digit code");
        if(code == null)    {
            break;
        }
        else if(isNaN(code) || code.length != 4){
            validateCode=false;
            alert("Not a valid code, please try again!");
        }
    }
    while(!validateCode);
    if(code != null){
        let courseFound = false;
        for (let course of courseList){
            if(course.code.includes(code)){
                for(let i = 0; i < liRef.length; i++){
                    if(titleList[i].textContent == course.code )
                        liRef[i].classList.add('changeBGGreen');
                }
                courseFound = true;
                break;
            }
        }
        if(!courseFound){
            const newLi = document.createElement('li');
            const newP1 = document.createElement('p');
            const newP2 = document.createElement('p');
            const newP3 = document.createElement('p');
            newP1.textContent = code;
            newP2.textContent = 'Fall 2020';
            newP3.textContent = 'N/A';
            newLi.appendChild(newP1);
            newLi.appendChild(newP2);
            newLi.appendChild(newP3);
            courseRef.appendChild(newLi);    
        }
    }
}
findCourse(createCourseArray())