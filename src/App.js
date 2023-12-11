import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import WorkoutList from './components/WorkoutList';
import WorkoutForm from './components/WorkoutForm';
import NotFound from './NotFound';


const App = () => {
  return (
    <div>
        <Container className="mt-4">
          <Router>
              <Routes>
                <Route path="/" element={<WorkoutList />} />
                <Route path="/add" element={<WorkoutForm />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
          </Router>
        </Container>
    </div>

  );
};

export default App;
