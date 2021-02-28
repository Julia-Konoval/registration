import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginHome from './components//login/LoginHome';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginHome} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
