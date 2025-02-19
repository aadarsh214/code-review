const express = require('express');
const aiRoutes = require('./routes/ai.route');
const app = express();

app.use(express.json());
app.get('/', (req , res) =>{
    res.send('hello world')
})

app.listen(3000)

app.use('/ai', aiRoutes);

module.exports = app