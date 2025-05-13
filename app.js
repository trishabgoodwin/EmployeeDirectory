import express from "express"
const app = express()
import employees from "#db/employees"

//localhost:3000/employees/random
app.route('/employees/random').get((req,res) => {
    const index = Math.floor(Math.random() * employees.length)
    const found = employees[index -1]
    if(found){
        res.send(found)
         }else{
            res.status(404).send("Unable to find employee!")
        }
    }
)



//localhost:3000/employees/id
app.route('/employees/:id').get((req, res)=>{
    const employeeID = Number(req.params.id);
    const found = employees.find(emp=> emp.id === employeeID)
    if (found){
        res.status(200).send(found)
    } else {
        res.status(404).send()
    }
})

//localhost:3000/emmployees
app.route('/employees').get((req,res)=>{
    res.send(employees)
})

//localhost:3000
app.route('/').get((req, res)=>{
    res.send("Hello employees!")
})




export default app