import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const WorkoutForm = () => {
  const [workout, setWorkout] = useState({
    name: '',
    level: '',
    sets: 0,
    reps: 0,
    equipment: '',
    muscles: [], 
    description: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    });
  };

  return (
    <div>
      <h2>Add Workout</h2>
      <Link to="/">
        <Button variant="secondary">Back to Workouts</Button>
      </Link>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Workout Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter workout name"
            name="name"
            value={workout.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="level">
          <Form.Label>Workout Level</Form.Label>
          <Form.Control
            as="select"
            name="level"
            value={workout.level}
            onChange={handleInputChange}
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="sets">
          <Form.Label>Sets</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter sets"
            name="sets"
            value={workout.sets}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="reps">
          <Form.Label>Reps</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter reps"
            name="reps"
            value={workout.reps}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="equipment">
          <Form.Label>Equipment Used</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter equipment"
            name="equipment"
            value={workout.equipment}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="muscles">
          <Form.Label>Muscles Worked</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter muscles (comma-separated)"
            name="muscles"
            value={workout.muscles ? workout.muscles.join(',') : ''}
            onChange={(e) => setWorkout({ ...workout, muscles: e.target.value.split(',') })}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter workout description"
            name="description"
            value={workout.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Workout
        </Button>
      </Form>
    </div>
  );
};

export default WorkoutForm;
