import * as React from "react";
import { useState } from "react";

const title = "Hello";
const App = () => {
  const data = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const searchHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <div>Hello {title}</div>

      <Search onSearch={searchHandler} />
      <hr />
      <List list={data} />
    </>
  );
};

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const HandleChange = (e) => {
    setSearchTerm(e.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      {" "}
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={HandleChange} />
      <p>
        Search for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};
const List = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((item) => {
          return <Item key={item.objectID} item={item} />;
        })}
      </ul>
    </div>
  );
};
const Item = (props) => {
  return (
    <div>
      <li>
        <span>
          <a href={props.item.url}>{props.item.title}</a>
        </span>
        <span>{props.item.author}</span>
        <span>{props.item.num_comments}</span>
      </li>
    </div>
  );
};
export default App;
