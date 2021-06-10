import { Route, Switch, useHistory } from 'react-router';
import SignInForm from './components/forms/SignInForm';
import SignUpForm from './components/forms/SignUpForm';
import Navigation from './components/navigation';

function App() {
  const history = useHistory();

  const onLogOut = () => {
    localStorage.removeItem('auth.token');
    history.replace('/');
  };
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/register">
          <SignUpForm />
        </Route>
        <Route path="/login">
          <SignInForm/>
        </Route>
        <Route path="/blogs">
          <h1>Blogs</h1>
          <button className="btn btn-primary" onClick={onLogOut}>
            Log out
          </button>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
