// implement your API here

const express = require('express')
const server = express()

server.get("/", (req, res) => {
    res.json({ message: "hello, world" })
})

server.post("/api/users", (req, res) => {
const newUser = {
    name: "",
    bio: "",
}

users.push(newUser)
if (user) {
    users.push(newUser)
    res.status(201).json(newUser)
} else {
    res.status(400).json({ errorMessage: "Please provide name and bio for the user" })
}
})

server.get("api/users/:id", (req,res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist" })
    }
})

const port = 8080

server.listen(port, () => {
console.log(`server started at http://localhost:${port}`)
})


// server.get("/users/:id", (req,res) => {
//   const id = req.params.id
//   const user = users.find(u => u.id == id)

//   if (user) {
//       res.json(user)
//   } else {
//       res.status(404).json({ message: "User not found" })
//   }
// })