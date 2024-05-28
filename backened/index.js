const connectToMongodb = require('./db')
const express = require('express')
const app = express()
const PORT = 3000

const cors = require('cors')
app.use(cors())
const user = require('./models/Users')
connectToMongodb();
app.use(express.json())
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