const { error } = require("console");
const fs = require("fs");

fs.readFile("students.json","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    if(data){
        console.log(`studentFile with async : ${data}`);
    }
});

const studentFile=fs.readFileSync("students.json","utf-8");
console.log(`studentFile with sync : ${studentFile}`);

 function writeStudentSync(data){
    fs.writeFileSync("students.json",JSON.stringify(data),"utf-8");
    console.log(`data write successfully with Sync`);
   }
   function writeStudentAsync(data) {
  fs.writeFile("students.json", JSON.stringify(data, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(`Data write error with Async:`, error);
    } else {
      console.log(`Data written successfully with Async`);
    }
  });
}
   const dataSync= {
    id: 4,
    name: "Abdallah Bahaa",
    age: 25,
    course: "Machine Learning",
    grades: {
      Ai: 100,
      DeepLearning: 100,
    },
  };
  const dataAsync= {
    id: 5,
    name: "Abdallah Mohamed",
    age: 23,
    course: "Web Development",
    grades: {
      html: 1000,
      javascript: 1000,
    },
  };

   function readStudentSync(){
    return fs.readFileSync("students.json","utf-8");
   }
   function readStudentAsync(){
     fs.readFile("students.json","utf-8",(error,data)=>{
    if(error){
       return  console.log(`error read data with async ${error}`);
    }
    if(data){
        return console.log(`read data with async successfully: ${data}`);
    }
});
   }

readStudentSync();
readStudentAsync();


   const data=readStudentSync();
   const parseData=JSON.parse(data);
   parseData.push({
    id: 6,
    name: "Mohamed Ahmed",
    age: 24,
    course: "Mobile Development",
    grades: {
      flutter:200,
      native: 200,
    },

   });
   writeStudentSync(parseData);


   function updateCourse(studentId, updatedCourse){
    const data = readStudentSync();
    const students = JSON.parse(data); 
    const student=students.find((stu) => stu.id===studentId);
    if(student){
        student.course=updatedCourse;
        writeStudentSync(students);
        console.log("update done successfully");

    }
    else{
        console.log("error when update");
    }
   }
   updateCourse(6,"Machine Learning")


   function deleteStudent(studentId){
    const data = readStudentSync();
     let students = JSON.parse(data);
     students=students.filter((stu) => stu.id!==studentId);
        writeStudentSync(students);
        console.log("delete done successfully");
   }
   deleteStudent(1);
