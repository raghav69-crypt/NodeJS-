const app = require("express")();

const PORT = 8081;

app.listen(PORT , ()=> console.log("Server running on  ${PORT}")
);

// app.get('/fruit' , (req ,res)=>{
//         res.send({
//             Apple : 2 ,
//             banana : "Sweet"
//         })
// })

app.get('/fruit' , (req ,res)=>{
    res.send("Apple and mango is good for health")
})