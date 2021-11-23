const express = require('express');

const app = express();

app.use(express.json());


let data = require('./MOCK_DATA.json');



// responding with Book data when GET request is made to homepage


app.get("/", (req, res) =>{
    res.send({"api_requested_by": "Gaurav Maihuria",data});
});



// posting data


app.post("/books", (req, res) =>{

    const newData = [...data, req.body];

    // console.log(newData);

    res.send({"api_requested_by": "Gaurav Maihuria",newData});
});



// filtering data from ID


app.get("/books/:id", (req, res) =>{

    const newData = data.filter((book) => book.id === Number(req.params.id));

  

    res.send({"api_requested_by": "Gaurav Maihuria",newData});
});



// patching data from ID


app.patch("/books/:id", (req, res) =>{

    
    const newData = data.map(book =>{
        if(req.params.id == book.id){
            
            if(req?.body?.author) book.author = req.body.author;

            if(req?.body?.book_name) book.book_name = req.body.book_name;

            if(req?.body?.pages) book.pages = req.body.pages;

            if(req?.body?.published_year) book.published_year = req.body.published_year;
        }

        return book;
    });

    res.send({"api_requested_by": "Gaurav Maihuria",newData});
});



// deleting data which match ID

app.delete("/books/:id", (req, res) =>{

    const newData = data.filter((book) => book.id != req.params.id);

    res.send({"api_requested_by": "Gaurav Maihuria",newData});
});


//listening on port 5000


app.listen(5000, (req, res) =>{
    console.log("Listening on port 5000");
})