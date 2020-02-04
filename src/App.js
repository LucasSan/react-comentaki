import React, { useState, useEffect } from 'react'
import firebase from './firebase'

const Comments = () =>

function App() {
  const [data, setData] = useState({})
  
  useEffect(() => {
    const ref = firebase.database().ref('teste')
    ref.on('value', snapshot => {
      console.log(snapshot.val())
      setData(snapshot.val())
    })
  }, [])

  return <div>
    {JSON.stringify(data)}
  </div>
}

export default App
