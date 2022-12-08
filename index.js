const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require('./Data/data.json');
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.get('/', (req, res) => {
    res.send('Programming API Running');
});
app.get('/courses/:id', (req, res) => {
    const id =  parseInt(req.params.id);
    const selectedCourse = courses.find(cr=>cr.id ===id);
    res.send(selectedCourse);
    
    
});
app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
}) 




Why you will make your career as a wild photo Grapher