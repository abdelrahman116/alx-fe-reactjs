import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";
import ProfileDetails from "./ProfileDetails";

export default function Profile() {
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
      </div>
      <h1>Hi My name is: David</h1>
      <h3>22 Years Old</h3>
      <Switch>
        <Route exact path={path}>
          <h3>Please select an option.</h3>
        </Route>
        <Route path={`${path}/profileDetails`}>
          <ProfileDetails />
        </Route>
      </Switch>
    </>
  );
}
