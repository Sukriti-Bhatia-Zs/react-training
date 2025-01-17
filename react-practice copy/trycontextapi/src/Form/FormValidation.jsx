import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validateform = () => {
    const newErrors = {
      name: '',
      email: '',
    };

    let isValid = true;

   
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only alphabets';
      isValid = false;
    }

   
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    if (validateform()) {
      console.log('Form submitted:', formData);
      // Reset form data and errors
      setFormData({ name: '', email: '' });
      setErrors({ name: '', email: '' });
    }
  };

  return (
    <div className='mainbody'>
      <form onSubmit={handleSubmit} className='content'>
       
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: 'black' }}>{errors.name}</p>}
        </div>

      
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: 'black' }}>{errors.email}</p>}
        </div>

       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;


