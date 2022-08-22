const express = require('express');
const app = express();
const port = 8000;


app.get('' , (req , res)=>{
    res.send('welcome to my home page');
});

app.get('/about' , (req , res)=>{
    res.send('welcome to my about page');
});

app.get('/contact' , (req , res)=>{
    res.send('welcome to my contact page');
});

app.get('/temp' , (req , res)=>{
    res.send('welcome to my page');
});

app.get('/json' , (req , res)=>{
    res.send(
        {
            id : 1,
            name:"vinod"
        },
    );
});

app.get('/arrJson' , (req , res)=>{
    res.send([
        {
            id : 1,
            name:"vinod"
        },
        {
            id : 2,
            name:"rohan"
        },
        {
            id : 3,
            name:"pratap"
        },
        {
            id:null,
            name:null
        }
    ]);
});

app.get('/resjson' , (req , res)=>{
    res.json([   //sending data using res.json
        {
            id : 1,
            name:"vinod"
        },
        {
            id : 2,
            name:"rohan"
        },
        {
            id : 3,
            name:"pratap"
        },
        {
            id:null,
            name:null
        }
    ]);
});



app.listen(port , (err)=>{
    if(err){
        console.log(`Error to connecying to server bue to ${err}`);
    }
    console.log(`Server running on the port :: ${port}`);
})