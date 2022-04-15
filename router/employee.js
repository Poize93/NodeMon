var express=require("express")
const router=express.Router();
var employeeModule=require("../module/employee");
// router.get('/get',(req,res,next)=>{
//     res.send("Employee data")
// })

// router.get('/get',employeeModule.getEmployee);
router.get('/',employeeModule.getEmployee);
router.get('/:id',employeeModule.getEmployee);
router.post('/create',employeeModule.createEmployee);
router.put('/update/:id',employeeModule.updateEmployee);
router.patch('/update/:id',employeeModule.updateEmployee);
router.patch('/delete/:id',employeeModule.updateEmployee);


module.exports=router;