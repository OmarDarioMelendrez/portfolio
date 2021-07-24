import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Backend from './pages/Backend'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/backend' component={Backend} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
