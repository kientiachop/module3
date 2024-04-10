/* bài tập 2 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
const app = express();


router.get('/',(req,res) => {
  // let data = fs.readFileSync(`./ask-community-project/todos.json`,"utf8");
  let data = fs.readFileSync(`./ask-community-project/todos.json`);
  res.send(data)
})
router.get('/:id',(req,res)=> {
  const { id } = req.params;
  let data = fs.readFileSync(`./ask-community-project/todos.json`,"utf8");
  data = JSON.parse(data);
  let result = data.findIndex((item)=> {
    return item.id === id
  });
  if (result == -1) {
    res.send('hô hô');
  } else {
    res.send(data[result]);
  }
});

router.post('', (req,res)=> {
  const { title } = req.body;
  let data = fs.readFileSync(`./ask-community-project/todos.json`,"utf-8");
  data = JSON.parse(data);
  let result = data.findIndex((item)=> {
    return item.title === title
  });
  if (result == -1) {
    let newTodo = {
      title: title
    }
    data.push(newTodo);
    fs.writeFileSync(`./ask-community-project/todos.json`,JSON.stringify(data))
    res.send('Create Successfully');
  } else {
    res.send('Todo already exists');
  }
})

router.put('/:id',(req,res)=> {
  const idUser = req.body;
  let data = JSON.parse(fs.readFileSync(`./ask-community-project/todos.json`,"utf-8"));
  let newId = req.params.id;
  let result = data.findIndex((item)=> {
    return item.id == newId;
  });
  if (result == -1 ){
    res.send("Todo not found");
  } else {
    data.splice(result, 1, idUser);
    fs.writeFileSync(`./ask-community-project/todos.json`,JSON.stringify(data))
    res.send("Update successfully");
  }
});

router.delete('/:id', (req,res)=> {
  let data = fs.readFileSync(`./ask-community-project/todos.json`,"utf-8");
  data = JSON.parse(data);
  let newId = req.params.id;
  let result = data.findIndex((item)=> {
    return item.id == newId;
  });
  if (result == -1) {
    res.send("Todo not found")
  } else {
    data.slice(result, 1);
    fs.writeFileSync(`./ask-community-project/todos.json`,JSON.stringify(data));
    res.send("Delete successfully");
  }
})


module.exports = router;