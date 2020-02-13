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

server.get("api/users/:id", (req,res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist" })
    }
})

server.delete("api/users/i:d", (req, res) => {
    const user = users.find(u => u.id == req.params.id)

    if (user) {
        //
        users = users.filter( u => u.id != req.params.id)
        // can return the resource that was deleted with "res.json(users)" or...
        // return an empty resource...
        res.status(204).end()
    } else {
        // return an error
    }   res.status(404).json({ message: "User not found"})
})

server.put("api/users/:id", (req,res) => {
    // finds the location of the user we're updating in the fake database
    const index = users.findIndex(u => u.id== req.params.id)

    // update that user's name if a new value is sent in the request body
    if (req.body.name) {
        users(index).name = req.body.name
    }

    // return the updated user data
    res.json(users[index])
})

// users.push(newUser)
// if (user) {
//     users.push(newUser)
//     res.status(201).json(newUser)
// } else {
//     res.status(400).json({ errorMessage: "Please provide name and bio for the user" })
// }
// })






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