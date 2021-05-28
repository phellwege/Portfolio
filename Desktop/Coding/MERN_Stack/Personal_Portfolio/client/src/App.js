import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/update';
import ProjectForm from './components/ProjectForm';
import About from './components/About'
import CssBaseline from '@material-ui/core/CssBaseline';
import Contact from './components/Contact';
import SWHomeComing from './components/SWHomeComing';
import EventPlanner from './components/EventPlanner';

function App() {
  return (
    
    <div className="App">
      <React.Fragment>
        <CssBaseline />
          <Router>
            <Main path="/"/>
            <ProjectForm path="/new"/>
            <About path="/About"/>
            <Contact path="/Contact"/>
            <SWHomeComing path="/SW"/>
            <EventPlanner path="/EventPlanner"/>
            <Detail path="/projects/:id" />
            <Update path="projects/:id/edit"/>
          </Router>
      </React.Fragment>
    </div>
  );
  
}

export default App;