import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import AllPlayers from './components/AllPlayers';
import './App.css'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
        <MainContainer />
        <NavBar />
        <AllPlayers />
    </div>
    </>
  )
}

export default App;
