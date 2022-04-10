import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const url = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1051&sort=price_asc&nano&limit=50&search_type=scan'
  const [todos, setTodos] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON.results)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
    {
      !todos ? 'Cargando ...' : todos.map((todo, index)=>{
        return <li key={todo.id}> {todo.title}</li>
      })
    }
    </div>
  );
}

export default App;
