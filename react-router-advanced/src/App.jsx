import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import Profile from "./components/Profile";
function App() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to={`${url}/profileDetails`}>Profile-Details</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={path}>
            <h3>Please select an option.</h3>
          </Route>
          <Route path={`${path}/profileDetails`}>
            <ProfileDetails />
          </Route>
          <Route path={`${path}/profile`}>
            <Profile />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
