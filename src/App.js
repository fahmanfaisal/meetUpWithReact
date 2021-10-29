import { Route , Switch} from 'react-router-dom';

import './App.css';
import AllMeetUpPage from './pages/AllMeetUp';
import NewMeetUp from './pages/NewMeetUp';
import Favourits from './pages/Favourits';
import Layout from './componets/layout/Layout';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
