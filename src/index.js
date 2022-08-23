const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = 8000;

// builtin middleware
const static_path = path.join(__dirname , "../public");
const templatePath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "../templates/partials")


//to set the view engine(i.e, view engine hbs)
app.set("view engine" ,"hbs");
// app.use(express.static(static_path));
app.set("views" , templatePath); //telling the express that name of views is changed to templets and you have to look into this instead of looking for views
 hbs.registerPartial(partialsPath);



//routes
app.get("/" , (req , res)=>{
    res.render("home");
});

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