const {
  todos
} = require("../database/todo");

module.exports = {
  getTodos: (req, res, next) => {
    const doIt = todos;
    res.status(200).json(doIt);
  },

  addTodo: (req, res, next) => {
    //등록 날짜
    const {
      title
    } = req.body;
    let today = new Date();
    let year = today.getFullYear(); //년도
    let month = today.getMonth() + 1; //월
    let date1 = today.getDate(); //날짜
    const create_at = year + "-" + month + "-" + date1;

    //id 값 구하기
    const lastId = todos[todos.length - 1].id;
    const userId = lastId + 1;
    const it = {
      id: userId,
      title,
      date: create_at,
      completed: false,
    };
    todos.push(it);
    res.status(201).json({
      success: true,
      message: "등록 성공",
    });
  },

  removeTodo: (req, res, next) => {
    const {
      id
    } = req.params;
    console.log(id);
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === Number(id)) {
        todos.splice(i, 1);
      }
    }
    res.json({
      success: true,
      message: "삭제 성공"
    });
  },
  toggleTodo: (req, res, next) => {
    const {
      id
    } = req.params;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === Number(id)) {
        console.log('a');
        if (todos[i].completed !== false) {
          console.log('b');
          todos[i].completed = false;
        } else {
          console.log('c');
          todos[i].completed = true;
          console.log(todos[i].completed);
        }
      }
    }
    res.json({
      success: true,
      message: "토글 성공"
    })
  },
};