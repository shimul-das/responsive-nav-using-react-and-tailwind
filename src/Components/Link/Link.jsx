import React from 'react'



const Link = ({route}) => {
return (
<li className='mr-8'>
    <a className='hover:bg-purple-600' href={route.path}>{route.name}</a>
</li>
)
}

export default Link