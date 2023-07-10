import React from 'react'

const userProfile = ({params}: any) => {
  return (
    <div>
        <h3>Profile</h3>
        <hr />
        <p className='p-2 rounded bg-orange-500 '>profiel page {params.id}</p>
    </div>
  )
}

export default userProfile;