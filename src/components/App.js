import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Forms Application</h1>
        <nav style={{ 
          textAlign: 'center', 
          marginBottom: '20px',
          padding: '20px',
          backgroundColor: '#f5f5f5'
        }}>
          <Link 
            to="/" 
            id="form-link"
            style={{ 
              margin: '0 15px', 
              textDecoration: 'none', 
              color: '#27aedb',
              fontWeight: 'bold'
            }}
          >
            Form (Section 1)
          </Link>
          <Link 
            to="/form-ref" 
            id="form-ref-link"
            style={{ 
              margin: '0 15px', 
              textDecoration: 'none', 
              color: '#27aedb',
              fontWeight: 'bold'
            }}
          >
            Form with useRef (Section 2)
          </Link>
          <Link 
            to="/form-state" 
            id="form-state-link"
            style={{ 
              margin: '0 15px', 
              textDecoration: 'none', 
              color: '#27aedb',
              fontWeight: 'bold'
            }}
          >
            Form with useState (Section 3)
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

