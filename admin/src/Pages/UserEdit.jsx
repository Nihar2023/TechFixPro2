// src/pages/UserEdit.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Spinner, Card } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: 'user',
    active: true
  });

  useEffect(() => {
    if (id !== 'new') {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/api/users/${id}`, {
            headers: { Authorization: `Bearer ${authToken}` }
          });
          setUser(response.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch user data');
          setLoading(false);
        }
      };
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [id, authToken]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      if (id === 'new') {
        await axios.post('/api/users', user, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        setSuccess('User created successfully');
      } else {
        await axios.put(`/api/users/${id}`, user, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        setSuccess('User updated successfully');
      }
      setTimeout(() => navigate('/users'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Card>
      <Card.Header>
        <h3>{id === 'new' ? 'Create New User' : 'Edit User'}</h3>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              value={user.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="technician">Technician</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              id="active-switch"
              name="active"
              label="Active"
              checked={user.active}
              onChange={handleChange}
            />
          </Form.Group>

          {id !== 'new' && (
            <Form.Group className="mb-3">
              <Form.Label>Reset Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Leave blank to keep current password"
                onChange={handleChange}
              />
            </Form.Group>
          )}

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={() => navigate('/users')}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {id === 'new' ? 'Create User' : 'Save Changes'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UserEdit;