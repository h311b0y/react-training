import './App.css';
import { useState, useEffect } from "react";

const query = `
query {
    allLifts {
        name
        elevationGain
        status
    }
}
`;

const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
};

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
      {value, onChange: e => setValue(e.target.value)},
      () => setValue(initialValue)
    ];
  }

function lift({name, elevationGain, status}) {
    return (
      <div className="App">
        <h1>{name}</h1>
        <p>{elevationGain} {status}</p>
      </div>
    );
  }
  import { useState, useEffect, useReducer} from "react";

  // const [firstCity, secondCity, thirdCity] = ["St. Louis", "Chicago", "Louisville"];
  
  // console.log(firstCity);
  // console.log(secondCity);
  // console.log(thirdCity);
  
  function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
      {value, onChange: e => setValue(e.target.value)},
      () => setValue(initialValue)
    ];
  }
  
  
  
  function App() {
  // variables 
    const [checked, setChecked] = useReducer((checked) => !checked, false);  
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");
  
    // useEffect(() => {
    //   console.log(`It's ${emotion} right now`);
    // }, [emotion]);
  
    // useEffect(() => {
    //   console.log(`It's ${secondary} around here.`);
    // }, [secondary]);
  
    // const txtTitle = useRef();
    // const hexColor = useRef();
  
    // const submit = e => { 
    //   e.preventDefault();
    //   const title = txtTitle.current.value;
    //   const color = hexColor.current.value;
    //   alert(`${title}, ${color}`);
    //   txtTitle.current.value = "";
    //   hexColor.current.value = "";
    // };
  
    // const [title, setTitle] = useState("");
    // const [color, setColor] = useState("#000000");  
    // const submit = (e) => {
    //   e.preventDefault();
    //   alert(`${title}, ${color}`);
    //   setTitle("");
    //   setColor("#000000");
    // };
  
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useState("#000000");
    const submit = (e) => {
      e.preventDefault();
      alert(`${titleProps.value}, ${colorProps.value}`);
      resetTitle();
      resetColor();
    };
  
  // 6 - asynchronous react
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      fetch(
        `https://api.github.com/users/h311b0y`
      )
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
      }, []);
  
      if(loading) return <h2>Loading...</h2>;
      if(error) return <pre>(JSON.stringify(error))</pre>;
      if(!data) return null;
  
      return (
        <GithubUser
          name={data.name}
          userName={data.login}
          location={data.location}
          avatar={data.avatar_url}
          portfolio={data.blog}
        />
      );
    
    
  // html generation
  function GithubUser({ name, location, avatar, userName, portfolio }) {
    return (
      <div className="App">
        <h1>Chris' React Project</h1>
  
        <input type="checkbox" value={checked} onChange={setChecked} />
        <label>{checked ? "checked" : "not checked"}</label>
        <hr />
  
        <p>Current emotion is {emotion}.</p>
        <button onClick={() => setEmotion("happy")}>Happy</button><br /><br />
        <button onClick={() => setEmotion("sad")}>Sad</button><br /><br />
        <button onClick={() => setEmotion("excited")}>Excited</button>
        <p>Current secondary emotion is {secondary}.</p>
        <button onClick={() => setSecondary("tired")}>Tired</button><br /><br />
        <button onClick={() => setSecondary("grateful")}>Grateful</button>
        <hr />
  
        <form onSubmit={submit}>
          <input {...titleProps} type="text" placeholder="Color Title..." />
          <input {...colorProps} type="color" />
          <button>ADD</button>
  
          {/* <input ref={txtTitle} type="text" placeholder="Color Title..." />
          <input ref = {hexColor} type="color" /><button>ADD</button>
          <br /><br />
          <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="color title..." />
          <input value={color} type="color" onChange={event => setColor(event.target.value)} />
          <input ref = {hexColor} type="color" /><button>ADD</button> */}
        </form>
        <hr />
  
        <h1>Github User API Data</h1>
        <h2>{name}</h2>
        <img src={avatar} height={150} alt={name} />
        <p>{userName}<br />
           {location}<br />
           {portfolio}
        </p>
        <hr />
      </div>
    );
  }};
  


  
function Page2() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`,
      opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading) return <h2>Loading...</h2>;
  if(error) return <pre>(JSON.stringify(error))</pre>;
  if(!data) return null;

  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift 
          name={lift.name} 
          elevationGain={lift.elevationGain} 
          status={lift.status} 
        />
      ))}

    </div>
  );
}

const tahoe_peaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

function List({data, renderItem, renderEmpty}) {
  return !data.length ? (
    renderEmpty
  ) : (<ul>
    {data.map((item) => (
      <li key={item.name}>
        {renderItem(item)}
      </li>
    ))}
  </ul>
  );
}

<List 
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty.</p>}
      renderItem={item => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
    
export default App;