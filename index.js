const express = require('express')
const app = express()



let data = [{emp_id:1,emp_name:"vikas", emp_city:"amd"},
            {emp_id:2,emp_name:"bhargav", emp_city:"gandhinagar"},
            {emp_id:3,emp_name:"ruchit", emp_city:"himmatnagar"},
            {emp_id:4,emp_name:"umang", emp_city:"surat"},
            {emp_id:5,emp_name:"ravi", emp_city:"vapi"},
            {emp_id:6,emp_name:"harshit", emp_city:"unjha"},
            {emp_id:7,emp_name:"sufiyan", emp_city:"daanta"}
        ]



app.get("/emps",(req,res)=>{
    res.status(200).send(data)
})

app.get('/emps/:id',(req,res)=>{
    res.status(200).send(data.find((item)=>item.emp_id==req.params.id))
})

app.listen(3000,()=>{
    console.log("Alive on post 3000");
})
