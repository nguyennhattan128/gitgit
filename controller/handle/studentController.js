const studentService = require('../../service/studentService');
const fs = require ('fs');
class StudentController{
    getStudentHtml = (students,indexHtml) =>{
        let studentHtml = '';
        students.map(item =>{
            studentHtml += `
               <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.name}</td>
                  <td>${item.class}</td>
                  <td>${item.description}</td>
                  <td><a type="button" class="btn btn-outline-secondary" href="/edit/${item.id}" >Edit</a></td>
                  <td><a  type="button" class="btn btn-outline-danger" href="/remove/${item.id}" >Remove</a></td>
                </tr>
            `
        })
        indexHtml = indexHtml.replace(' {student}', studentHtml);
        return indexHtml;
    }
    showStudent = (req,res) =>{
        fs.readFile('./view/index.html','utf-8',async (err,indexHtml)=>{
            let students = await studentService.findAll()
            indexHtml = this.getStudentHtml(students,indexHtml)
            res.write(indexHtml);
            res.end();
        })
}
}
module.exports = new StudentController();
