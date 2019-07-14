import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AdminLayout from './layouts/AdminLayout';
import LogInRegisterLayout from './layouts/LogInRegisterLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/admin/" component={AdminLayout} />
      <Route path="/register/" component={LogInRegisterLayout} />
    </Router>  
  );
}

export default App;
