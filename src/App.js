import { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/cardlist/cardlist.component';
import { SearchBar } from './components/searchbar/searchbar.component';

function App() {
  //monsters is the initial state, useState will return a new state and function to set the state. 
  const [monsters, setMonsters] = useState([]); //[] represent the initial state
  //fetch information from database api
  useEffect( () => {
    const fetchUsers = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setMonsters(users);
    };
    fetchUsers();
    }, []); //the empty[] mean that it will load only on initial (once only), without it will keep requesting nonstop.

  //for handling user input
  const [searchInput, setSearchInput] = useState(""); //initial state is an empty string value
  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  //filtering the list based on user input
  const [filteredMonster, setFilteredMonster] = useState([]);
  useEffect( () => {
    let filtered = []; 
    if (searchInput === "") {
      filtered = monsters; //set the result state to the current monster state 
    }
    else {
      filtered= monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredMonster(filtered);}, [monsters, searchInput]); //two dependcies state

 

  return (
    <div className="App">
      <h1> Monster Roblodex </h1>
      <SearchBar 
        placeholder = 'Search Monster'
        handleInput = {handleInput} 
      />
      <CardList monsters = {filteredMonster} />
    </div>
  );
}

export default App;
