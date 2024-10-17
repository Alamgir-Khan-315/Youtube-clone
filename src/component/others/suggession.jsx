import React from 'react'
import Sugges from './Data/sugges.json'

const suggession = () => {
    return (
        <div className='px-5 mt-1 mb-4 flex gap-3'>
            {
                Sugges.map( d => {
                    return <div className='bg-gray-300 p-1 px-3 rounded-lg'>{d.name}</div>
                })
            }
        </div>
    )
}

export default suggession
