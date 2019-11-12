const express = require("express")
const path = require('path')

const app = express();
const PORT = 3000;

//Accessing 'public' folder
app.use(express.static(path.join(__dirname, 'public'))
);

//logging url requests
app.use('/', (req, res, next) => {
  console.log(req.url);
  next();
})

// Create express server that responds to root get req ('/')
// with 'Hello from the server side
app.use('/', (req, res) => {
  console.log('Hello from the web server side')
    }
)

//listen on port 3000
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
