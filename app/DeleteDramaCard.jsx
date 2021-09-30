import React from 'react';
import { Redirect } from 'react-router';



const deleteDrama = title => {
const body = { title };
    fetch('/api/deleteDrama', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(() => {
        <Redirect to="localhost:8080/" /> //feature is not working, will need to revisit
      })
      .catch(err => console.log('CreateDramaCard fetch /api/dramaCard ERROR: ', err));
  }


  export default deleteDrama;