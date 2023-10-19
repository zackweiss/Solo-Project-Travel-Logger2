import React from 'react';
import { useState } from 'react'


function Register (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
      e.preventDefault()
      props.toggleRegister()
  }

  return (
      <div className="popup">
          <div className="popup-inner">
              <h2>Register</h2>
              <form onSubmit={handleLogin}>
                  <label>
                      Username:
                      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                  </label>
                  <label>
                      Password:
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </label>
                  <button type="submit">Register</button>
              </form>
              <button onClick={props.toggleRegister}>Close</button>
          </div>
      </div>
  )
}
export default Register;