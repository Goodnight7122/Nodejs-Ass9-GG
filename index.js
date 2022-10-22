const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Suramesuan Saknitinad')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Suramesuan Saknitinad',
        age: 19,
        apocalypse: 'Learning by doing',
        detail: 'Hi am Good I am now studying at Multimedia and Entertainment Engineering Bangkok University'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
        name: '{Suramesuan Saknitinad}',
        age: '{19}',
        email: '{suramesuan.sakn@bumail.net}',
        address: 'pathum thani,khlong luang'
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
        project_name: '{Dimension of History',
        project_description: '{Project ge005}',
        project_link: '{https://drive.google.com/drive/u/1/folders/1EA-1uiEdGrDQ82fz0lE6j7LsYSYfwb_d}'
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address: '{pathum thani,khlong luang}',
        email: '{suramesuan.sakn@bumail.net}',
        phone_number: '{0967200603}'
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})