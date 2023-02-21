import React, {useState, useEffect} from 'react'
import "./Home.css"


const Home = () => {
  const createTodo = (e) => {
    e.preventDefault()

    const { title } = e.target
    console.log(title.value);

    fetch("http://localhost:3000/", {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
        })
    }).then(res => res.json())
      .then(data => alert(data.msg))
      .then(window.location.reload())
  }
  const [todos, setTodos] = useState([])
  console.log(todos);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(todo => setTodos(todo))



    }, [])




  return (
    <div className='container'>
      <form className='site-form' onSubmit={(e)=>createTodo(e)}>
        <input name='title' className='input' type="text" placeholder='New task...' />
      </form>
      <div className="task-category">
        <p className='category-links'>All</p>
        <p className='category-links'>Active</p>
        <p className='category-links'>Completed</p>
      </div>
      <div className='task-wrapper'>
        {
          todos.map(el=>{
            console.log(el);
            return(
              <div key={el.id} className='tasks'>
                <input className='checkbox' type="checkbox"  />
                <p className='todo-title'>{el.title}</p>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Home