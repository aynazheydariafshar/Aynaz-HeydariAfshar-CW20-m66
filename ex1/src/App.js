import { useEffect, useState } from 'react';
import './Assest/Styles/App.css';
import MyForm from './Components/MyForm';
import axios from 'axios';
import Spinner from './Components/Spinner';

function App() {

  const[isloaded , setisloaded] = useState(false)
  const[data,setdata] = useState({})

  useEffect(() => {
    axios
    .get('http://localhost:3001/posts')
    .then(res => res.data)
    .then(mydata => {
      setdata(mydata[0])})
    .finally(() => setisloaded(true))
  }, [])

  return (
    <div className="App">
      {isloaded ? <MyForm initValues={data}/> : <Spinner />}
    </div>
  );
}

export default App;
