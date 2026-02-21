import React from 'react'
import { useParams } from 'react-router'

function Users() {
  const { userId } = useParams()
  return (
    <div className='text-center text-2xl font-bold mt-20 text-white bg-gray-800 py-10 rounded-lg'>
      User: {userId}
    </div>
  )
}

export default Users
