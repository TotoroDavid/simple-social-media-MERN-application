import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
//component 
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Auth from './Auth/Auth'

const App = () => {
  return (
    <Router>
      <Container maxWidth='lg' >
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
