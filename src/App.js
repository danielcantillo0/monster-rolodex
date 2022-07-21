import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredmonsters, setFilteredmonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    setFilteredmonsters(newFilteredmonsters);
  }, [monsters, searchString]);

  console.log(searchString);

  const onSearchchange = (event) => {
    const searchStringLowercase = event.target.value.toLocaleLowerCase();
    setSearchString(searchStringLowercase);
  };

  return (
    <div className="App">
      <h1 className="app-title">Adopt a Monster</h1>
      <p className="app-description">Pick your favorite monster</p>
      <SearchBox
        onSearchhandler={onSearchchange}
        className="monster-search-box"
        placeholder="search monsters"
      />
      {<CardList monsters={filteredmonsters} />}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchstring: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchchange = (event) => {
//     const searchstring = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchstring };
//     });
//   };

//   render() {
//     const { monsters, searchstring } = this.state;
//     const { onSearchchange } = this;

//     const filteredmonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchstring);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Adopt a Monster</h1>
//         <p className="app-description">Pick your favorite monster</p>
//         <SearchBox
//           onSearchhandler={onSearchchange}
//           className="monster-search-box"
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredmonsters} />
//       </div>
//     );
//   }
// }

export default App;
