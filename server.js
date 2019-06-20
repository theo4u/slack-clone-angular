const express = require('express')
const bodyParser = require('body-parser')
const StreamChat = require('stream-chat').StreamChat
const cors = require('cors')
const shortId = require('shortid')
require('dotenv').config()

const  StreamServer = new StreamChat(process.env.STREAM_APP_KEY, process.env.STREAM_APP_SECRET)

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/join', (req, res) => {
    const user = {
        ...req.body,
        id: shortId.generate()
    }
    res.send({user,  token: StreamServer.createToken(user.id)})
})

app.listen(process.env.PORT || 3000, () => console.log('Listening at 3000'))