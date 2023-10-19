import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Login (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
      e.preventDefault()
      

      props.toggleLogin()
  }

  return (
      <div className="popup">
          <div className="popup-inner">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                  <label>
                      Username:
                      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                  </label>
                  <label>
                      Password:
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </label>
                  <button type="submit">Login</button>
              </form>
              <button onClick={props.toggleLogin}>Close</button>
          </div>
      </div>
  )
}

export default Login;