const express = require("express");
const app = express();

// Sample Data
const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"}
];

const products = [
    {id: 1, name: "Laptop", price: 999},
    {id: 2, name: "Phone", price: 699}
];

const foods = [
    {id: 1, name: "Bread", price: 1},
    {id: 2, name: "Apple", price: 1.5}
];

const clothes = [
    {id: 1, name: "Shirt", price: 10},
    {id: 2, name: "Pants", price: 15}
]

const rooms = [
    {id: 1, name: "Bathroom"},
    {id: 2, name: "Closet"}
];

const pets = [
    {id: 1, name: "Leo", type: "Cat"},
    {id: 1, name: "Fido", type: "Dog"},
];

// Routing

app.get("/", (req, res) => 
    res.send("Welcome to my API!"));

app.get("/users", (req, res) => 
    res.json(users));

app.get("/users/pets", (req, res) => 
    res.json(pets));

app.get("/products", (req, res) => 
    res.json(products));

app.get("/products/foods", (req, res) => 
    res.json(foods));

app.get("/products/clothes", (req, res) => 
    res.json(clothes));

app.get("/rooms", (req, res) => 
    res.json(rooms));

// Start Server

const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`));