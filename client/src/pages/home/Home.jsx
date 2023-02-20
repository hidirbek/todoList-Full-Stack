import React from 'react'
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
  }


  return (
    <div className='container'>
      <form className='site-form' onSubmit={(e)=>createTodo(e)}>
        <input name='text' className='input' type="text" placeholder='New task...' />
      </form>
      <div className="task-category">
        <p className='category-links'>All</p>
        <p className='category-links'>Active</p>
        <p className='category-links'>Completed</p>
      </div>
      <div className='task-wrapper'>
        <div className='tasks'>
          <input className='checkbox' type="checkbox" name="" id="" />
          <p className='todo-title'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='tasks'>
          <input className='checkbox' type="checkbox" name="" id="" />
          <p className='todo-title'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

    </div>
  )
}

export default Home