const fs = require("fs")

const checkTitle = (req, res, next) =>{
    const title = req.params.title
    // console.log("req", req.params);
    const data = JSON.parse(fs.readFileSync('./dev-data/questions.json', 'utf-8'))
    const index = data.findIndex((item) => {
        return item.title == title
    })
    if (index == -1) {
        res.send("Todo not found");
    }
    else{
        next()
    }
}

module.exports = checkTitle