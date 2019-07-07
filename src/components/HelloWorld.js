import React, { useEffect, useState } from 'react'

function HelloWorld () {

  const [data, setData] = useState({
    name: '',
    description: '',
  })

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(json => setData(json))
  }, [])

  return (
    <div className='HelloWorld'>
      <h4 style={{ textAlign: 'center' }}>{data.name}</h4>
      <p>{data.description}</p>
    </div>
  )
}

export default HelloWorld