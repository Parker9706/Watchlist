import React from 'react';
import { Redirect } from 'react-router';

const incrementDrama = title => {
  const body = { title };
  fetch('/api/increment', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .then((data) => {
    console.log('Look here: ', data);
    })
  .then(() => {
   props.history.push('/');
    })
  .catch(err => console.log('incrementDrama fetch /api/increment ERROR: ', err));
}

export default incrementDrama;