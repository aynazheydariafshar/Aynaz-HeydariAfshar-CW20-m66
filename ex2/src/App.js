import "./App.css";
import Posts from "./components/Posts";
import SaveStorage from "./components/SaveStorge";
import Form from "./components/Form";

function App() {
  return <>
    <Posts link={"https://jsonplaceholder.typicode.com/posts"} />
    <SaveStorage render={
      ({load, save, remove}) => {
        return (
          <>
          <Form loadData={load} saveData={save} removeData={remove}/>
          </>
        )
      }
    }/>
    <button>forget pas?</button>
  </>
}

export default App;
