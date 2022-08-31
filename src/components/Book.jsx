import React from 'react'

export default function Book(props) {
    console.log(props.title);
return (
    <div>
        <h3>{`id: ${props.id}, Titulo: ${props.title}`}</h3>
    </div>
)
}
