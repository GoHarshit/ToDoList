import React from 'react'

const ToDo = (props) => {
    return (
        <>
            <div className='todo_style'>
                <button className='delete' onClick={()=>{
                    props.onSelect(props.id);
                }}>×</button>
                <li>{props.text}</li>;
            </div>
        </>
    );
};

export default ToDo;