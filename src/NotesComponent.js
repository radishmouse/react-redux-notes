import React from 'react';

const NotesComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.notes.map(note => {
                    return <li onClick={() => {
                        props.handleDelete(note.id);
                    }}>{note.content}</li>;
                })}
            </ul>
        </div>
    )
}

export default NotesComponent;