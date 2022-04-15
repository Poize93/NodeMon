const express=require("express")
const employeeRouter=require('./router/employee');
const mongo=require('./shared/connect');


const app=express();
app.use(express.json());  // to convert req body into JSON format

mongo.connect();

app.use('/',(req,res,next)=>{
    //authetication
    //authorization 
    console.log("Midware1 ");
   next();
//    res.end("Ended in middleware")
// res.send({
//     data:"this middleware"
// })
});

// app.use('/',(req,res,next)=>{
// console.log("Midware2 ");
//    next();
// });

// app.use('/users',(req,res,next)=>{
//     console.log("Midware new ");
//        next();
//     });




// app.get('/users',(req,res,next)=>{
//  res.send({
//      name:'xxx',
//      age:25
//  })
// })


// app.get('/posts',(req,res,next)=>{
//     res.send({
//         name:'yyy',
//         age:28
//     })
//    })
app.use('/employee' , employeeRouter);

app.listen(3000);