import "./App.css";
import { Private } from "./components/auth/private";
import { Profile } from "./components/auth/profile";
import { Button } from "./components/button";
import { Container } from "./components/container";
import { Box } from "./components/context/box";
import { ThemeContextProvider } from "./components/context/themeContext";
import { Counter } from "./components/counter";
import Greet from "./components/greet";
import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { Oscar } from "./components/oscar";
import Person from "./components/person";
import { PersonList } from "./components/personList";
import { Status } from "./components/status";
import { List } from "./generics/list";
import  {ProductList}  from "./components/productList";

function App() {
  const personName = {
    first: "Bruce",
    last: "wyane",
  };
  const nameList = [
    { first: "Praveen", last: "Raj" },
    { first: "Mamitha", last: "Bhaiju" },
  ];
  return (
    <div className="App">
      <Greet name="Praveen" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to me</Heading>
      </Oscar>
      <Button handleClick={(event) => console.log("clicked", event)}></Button>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
      <Container styles={{ border: "1px solid black", padding: "10px" }} />
      <Counter />

      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>

      <Private isLoggedIn={true} component={Profile}></Private>
      <List
        items={["batman", "superman"]}
        onClick={(item) => console.log(item)}
      ></List>

      <ProductList />
    </div>
  );
}

export default App;
