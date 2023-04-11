const connection = require('../entity/connection');
const fs = require('fs');
class StudentService{
    connect;
    constructor() {
        connection.connectToMySQL();
        this.connect = connection.getConnection()
    }
    findAll = () =>{
        return new Promise ((resolve,reject)=>{
            let query = `select s1.id, s1.name,s1.class,s1.description from student s1 join dataStudent.score s on s1.id = s.student_id;`
            this.connect.query(query,(err,students)=>{
                if(err){
                    reject(err)
                }else {
                    resolve(students)
                }
            })
        })
    }

    createStudent = ()=>{
        return new Promise((resolve,reject)=>{
            let query =``;
            this.connect.query(query,(err,student)=>{
                if(err){
                    reject(err)
                }else {
                    resolve("Create Success")
                }
            })
        })
    }
}
module.exports = new StudentService();
let student = new StudentService();


