const connectToMongodb = require('./db')
const express = require('express')
const app = express()
const PORT = 3000

const cors = require('cors')
app.use(cors())
const user = require('./models/Users')
connectToMongodb();
app.use(express.json())

app.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const member = await user.findOne({ email: email })
        if (member) {
            if (member.password === password) {
                res.json("Success")
            }
            else {
                res.json("password incorrect")
            }    
        }
        else {
            res.json("no record exist")
        }
    }
    catch (error) {
     console.log(error)
    }
})
app.post('/signup', (req, res)=>{
    try {
        user.create(req.body)
        const users = res.json(users)
        return (console.log(res.user))
    }
    catch (error) {
        console.log(error)
    }
})
app.listen(PORT, () => {
    console.log(`App listening at ${PORT} successfully!`)
})