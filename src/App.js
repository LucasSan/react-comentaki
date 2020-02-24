import React, { useState, useEffect } from 'react'
import firebase from './firebase'

const useDatabase = endpoint => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    const ref = firebase.database().ref(endpoint)
    ref.on('value', snapshot => {
      setData(snapshot.val())
    })

    return () => {
      ref.off()
    }
  }, [endpoint])

  return data
}

const useDatabasePush = endpoint => {
  const [status, setStatus] = useState('')
  const save = data => {
    const ref = firebase.database().ref(endpoint)
    ref.push(data, err => {
      if (err) {
        setStatus('ERROR')
      } else {
        setStatus('SUCCESS')
      }
    })
  }

  return [status, save]
}

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.content} por: { comment.user.name }
    </div>
  )
}

const Comments = () => {
  const data = useDatabase('comments')
  if (!data) {
    return <p>Nenhum comentario enviado ate o momento</p>
  }

  const ids = Object.keys(data)

  if (ids.length === 0) {
    return <p>Carregando...</p>
  }

  return ids.map(id => {
    return <Comment key={id} comment={data[id]} />
  })
}

function App() {
  const [, save] = useDatabasePush('comments')

  return <div>
    <button onClick={() => {
      save({ content: 'ola aqui e meu comentario',
        user: {
          id: '1',
          name: 'Lucas'
        } })
    }}>Toggle</button>
    <Comments />
  </div>
}

export default App
