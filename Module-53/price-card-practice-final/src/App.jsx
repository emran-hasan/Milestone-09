
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Test from './components/test/test'

function App() {

  return (
    <div className="App">
        <Navbar></Navbar>
        <PriceList></PriceList>
        <Dashboard></Dashboard>
        <Test></Test>
    </div>
  )
}

export default App
