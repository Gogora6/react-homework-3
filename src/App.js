import { Route, Switch } from 'react-router';
import Navigation from './components/navigation';
import SignIn from './pages/auth';
function App() {
  return (
    <div className="container">
      <Navigation />
      <h1>HomeWork2 </h1>
      <Switch>
        <Route path="/index">
        <h1>Index </h1>
        </Route>
        <Route path="/home">
            <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  );
}
export default App;