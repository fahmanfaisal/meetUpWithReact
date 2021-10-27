import { Route , Switch} from 'react-router-dom';

import './App.css';
import AllMeetUpPage from './pages/AllMeetUp';
import NewMeetUp from './pages/NewMeetUp';
import Favourits from './pages/Favourits';
import MainNavigation from './componets/layout/MainNavigation';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Switch>
      <Route path="/" exact>
        <AllMeetUpPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetUp />
      </Route>
      <Route path="/favourits">
        <Favourits />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
