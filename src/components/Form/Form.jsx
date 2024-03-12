import React, { useState } from 'react';
import { HOST } from '../hooks/constants';

import './Form.scss';
import Button from '../Button/Button';

const Form = ({ token, position }) => {

  const tk = token.token;
  const [pos, setPos] = useState('');
  console.log(position)

  const handleChange = (e) => {
    setPos(e.target.value)
  }

  
  const handleSubmit = (e) => {
    // e.preventDefault();
    const formData = {
      // name: e.target.elements.name.value,
      // email: e.target.elements.email.value,
      // phone: e.target.elements.tel.value,
      position: pos,
    };

    console.log('FormData:', formData)
   

    // e.target.elements.name.value = ""
    // e.target.elements.email.value = ""
    // e.target.elements.tel.value = ""
    setPos("");

    // const endpointURL =(`${HOST}/users`);
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Token' : tk
    //   },
    //   body: JSON.stringify(formData)
    // };
    // fetch(endpointURL, requestOptions)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log('Успішно відправлено:', data);
    //   })
    //   .catch(error => {
    //     console.error('Виникла помилка:', error);
    //   });
    
  }
  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit()} }>
      <input required className='text' type="text" name='name'  placeholder='Your name' />
      <input required className='text' type="email" name='email' placeholder='Email' />
      <input required className='text' type="tel" name='phone' placeholder='Phone' />
      <p className='num'>+ 38(XXX) XXX-XX-XX</p>
      <h4>
        Select your position
      </h4>
      {position && position.positions && position.positions.length > 0 && (
        <>
          <div className='flex'>
            <input required type="radio" id={position.positions[0].id} name='position' value={position?.positions[0].id} checked={pos !== position.positions[0].id} onChange={(e) => setPos(position.positions[0].id)} />
            <p className='pos' >{position.positions[0].name}</p>
          </div>
          <div className='flex'>
            <input required type="radio" id={position?.positions.id} name='position' value={position.positions.id} checked={pos !== position.positions.id} onChange={handleChange} />
            <p className='pos'>{position?.positions[1].name}</p>
          </div>
          <div className='flex'>
            <input required type="radio" id={position?.positions.id} name='position' value={position.positions.id} checked={pos !== position.positions.id} onChange={handleChange} />
            <p className='pos'>{position?.positions[2].name}</p>
          </div>
          <div className='flex'>
            <input required type="radio" id={position?.positions.id} name='position' value={position.positions.id} checked={pos !== position.positions.id} onChange={handleChange} />
            <p className='pos'>{position?.positions[3].name}</p>
          </div>
        </>
      )}
      <input className='text' type="file" name="photo" />
      <button type='submit'  text='Sign up' />
    </form>
  )
}

export default Form;