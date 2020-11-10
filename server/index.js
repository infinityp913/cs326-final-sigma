const express = require('express'); 
const faker = require('faker');
const { readFileSync, existsSync } = require('fs');
const { parse } = require('url');
const app = express();
const port = 8080;    
const faker = require("faker");



app.get('/',(req,res) =>{
    res.writeHead(200, "Content-type : text/html");
    res.write(readFileSync("firstPage.html"));
    res.end();
});

app.get('/customers',(req,res) =>{
    res.write("List of customers");
    res.end();
});

app.get('/restaurants',(req,res) =>{
    const listOfRestaurants = [];
    for(let i=0;i<4;i++){
        const resName = faker.company.companyName();
        const resDesc = faker.company.catchPhrase();
        const jsonVal = { 'name' : JSON.stringify(resName) , 'description' : JSON.stringify(resDesc)};
        listOfRestaurants.push(jsonVal);
    }
    res.write(JSON.stringify(listOfRestaurants));
    res.end();
});

app.post('/signup',(req,res) =>{
    
});

app.post('/login',(req,res) =>{
    
});

// fake rest_id = 123 for milestone 1
app.get('/restaurant/123/orders', (req,res) => {
    res.send(JSON.stringify({
        "Monday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ],
        "Tuesday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ],
        "Wednesday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ],
        "Thursday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ],
        "Friday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ],
        "Saturday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ],
        "Sunday": [
            {
            img: faker.image.food(),
            title: "Meal sample",
            desc: "Here is a mock description that makes you want to buy this meal",
            time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Breakfast"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Lunch"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            },
            {
                img: faker.image.food(),
                title: "Meal sample",
                desc: "Here is a mock description that makes you want to buy this meal",
                time: "Dinner"
            }
        ]
    }));
});

app.get("/restaurant/123/cust_list", (req, res) =>{
    res.send(JSON.stringify([
        {
            img: faker.image.people(),
            name: faker.name.findName(),
            add: "32 Gucci St Amherst 01002 MA",
            email: faker.internet.email(),
            ph: faker.phone.phoneNumber()
        },
        {
            img: faker.image.people(),
            name: faker.name.findName(),
            add: "32 Gucci St Amherst 01002 MA",
            email: faker.internet.email(),
            ph: faker.phone.phoneNumber()
        },
        {
            img: faker.image.people(),
            name: faker.name.findName(),
            add: "32 Gucci St Amherst 01002 MA",
            email: faker.internet.email(),
            ph: faker.phone.phoneNumber()
        },
        {
            img: faker.image.people(),
            name: faker.name.findName(),
            add: "32 Gucci St Amherst 01002 MA",
            email: faker.internet.email(),
            ph: faker.phone.phoneNumber()
        }
    ]))
});

app.get("/restaurant/123/profile", (req, res) => {
    res.send(JSON.stringify({
        name: "Pita Dockets",
        desc: "The place with best kabas and gyros",
        add: "85 Bestproject Rd Amherst MA 01003",
        ph: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        pass: faker.internet.password()
    }));
});

app.post("/restaurant/123/profile/update", (req, res) => {
    //**************IMP NEEDS TO BE FILLED IN---code to store req's body in db -- will be completed after milestone 2's submission
    res.send({})
});

// Handles MIME types of css, javascript, html and image types(.png,.jpeg,.jpg etc).
app.get('*',(req,res) =>{
    const urlParsed = parse(req.url);
    const path = urlParsed.pathname.replace('/', '');
    if(existsSync(path)){ 
        if (path.endsWith(".html")){
            res.writeHead(200, {"Content-Type" : "text/html"});
        } else if(path.endsWith('.css')){
            res.writeHead(200, {"Content-Type" : "text/css"});
        }else if(path.endsWith('.js')){
            res.writeHead(200, {"Content-Type" : "text/javascript"});
        }
        res.write(readFileSync(path));
        res.end();
    }else{
        res.writeHead(404);
        res.end();
    }
});

app.listen(port, ()=>{
    console.log("Mealery listening at "+port);
});


