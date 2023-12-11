import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/workouts')
      .then((response) => response.json())
      .then((data) => setWorkouts(data));
  }, []);

  const handleMarkDone = (workoutId) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout) =>
        workout.id === workoutId ? { ...workout, done: !workout.done } : workout
      )
    );
  };

  return (
    <div>
      <h2>Workout Buddy</h2>
      <Link to="/add">
        <Button variant="primary" className="mb-3">
          Add Workout
        </Button>
      </Link>
      <div className="mt-4">
        {workouts.map((workout) => (
          <Card key={workout.id} className="mb-3">
            <Card.Body>
              <Card.Title>{workout.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{workout.level}</Card.Subtitle>
              <p>Sets: {workout.sets}, Reps: {workout.reps}</p>
              <p>Equipment: {workout.equipment}</p>
              {workout.muscles && <p>Muscles Worked: {workout.muscles.join(', ')}</p>}
              <p>Description: {workout.description}</p>
              <Button
                variant={workout.done ? 'success' : 'secondary'}
                onClick={() => handleMarkDone(workout.id)}
              >
                {workout.done ? 'Done' : 'Not Done'}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
