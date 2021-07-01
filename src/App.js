import { Route, Switch, useHistory } from 'react-router';
<<<<<<< HEAD
=======
import BlogList from './components/list/companies/BlogPostList';
>>>>>>> 1b6399ded9ad082abb730a8f850295145313f65c
import Navigation from './components/navigation';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

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
          <SignUp />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/profile">
          <h1>Blogs</h1>

          <button className="btn btn-primary" onClick={onLogOut}>
            Log out
          </button>
          <BlogList />

        </Route>
      </Switch>
    </div>
  );
}
export default App;
