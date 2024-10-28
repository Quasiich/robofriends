import React, {useState, useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import '../../src/containers/app.css'

function App () {
   const [robots, setRobots] = useState([])
   const [searchfield, setSearchfield] = useState('')

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(user => setRobots( user ));
   },[searchfield])

   const onSearchChange = (event) => {
      setSearchfield(event.target.value)
   }
   const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })
   return (
      <div className="tc">
         <h1 className="f1">RoboFriends</h1>
         <SearchBox searchChange={onSearchChange}/>
         <Scroll>
            <ErrorBoundry>
               <CardList robots={filteredRobots} />
            </ErrorBoundry>
         </Scroll>
      </div>
   );
}

export default App;