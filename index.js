const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('I can open node')
})

app.listen(10000, () => console.log('Listening to port 10000'))