import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 4000;


const client = new PrismaClient();

app.use(express.json());


//Create
app.post("/budget", async(req, res) => {
    try {

    const {
        title:title,
        quantity:quantity,
        price:price
    } = req.body;

    

    const newBudget = await  client.budget.create({
        data: {
             title:title,
             quantity:quantity,
             price:price
        },
    })

console.log(newBudget);
    
    res.status(201).json({message: "budget created successfully", data: newBudget})
} catch (e) {
        res.status(500).json({ message: e.message})
    }
});

// get all budget
app.get("/budget", async (req, res) => {
    try {
        const allBudget = await client.budget.findMany();
        if (allBudget.length <= 0) {
            res.status(204).json({message: "You don't have any budget yet"});
        } else {
            res.status(200).json({data: allBudget})
        }
    } catch(e) {
        res.status(500).json({ message: e.message})
    }
    res.send("getting all the budget")
});
// get a single budget
app.get("/budget/:title", async(req, res) => {

    const title  = req.params.title;
    try {
        const getBudget = await client.budget.findUnique({
            where: {
                title:title
            },
        })

        if (!getBudget) {
            res.status(404).json("no budget with that title found");
            return;
        }

        res.status(200).send(getBudget);

    } catch (e) {
        res.send({message: e.message});
    }
});
//update a budget
app.patch("/budget/:title", async (req, res) => {
    const userTitle  = req.params.title

    const {title, price, quantity} = req.body;
   try {
    let updatedBudget;

    if (title) {
        updatedBudget = await client.budget.update({
            where : {
                title:userTitle
            },
            data : {
                title: title
            }
        })
    }

    if
    res.send(updatedBudget);
   } catch (error) {
    res.status(500).send({message: error.message});
   }

});
//deleting a contact
app.delete("/budget/:item", (req, res) => {
    res.send("deleting a single budget")
});

app.listen(4000, ()=>{
    console.log("Server is running on http://localhost:4000")
});
// id, item, quantity, price,

