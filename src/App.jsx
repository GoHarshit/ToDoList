import React, { useState } from 'react'
import './index.css'
import ToDo from './ToDo.jsx';

const App=()=>{
    const [InputList,setInputList]=useState("");
    const [Items,setItems]=useState([]);

    /*const itemEvent=(event)=>{
        setInputList(event.target.value)
    };*/

    const listOfItems=()=>{
        setItems((oldItem)=>{
            return [...oldItem,InputList]
        })
        setInputList("");
    };

    const deleteItem=(id)=>{
        setItems((oldItem)=>{
            return oldItem.filter((arrEle,index)=>{
                return index!==id;
            });
        });
    };

    return (<>
        <div className='main_div'>
            <div className='centre_div'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input  
                    type='text' 
                    placeholder='Add Items' /*onChange={itemEvent}*/
                    value={InputList}
                    onChange={(event) => {
                    setInputList(event.target.value)
                    }}
                />
                <button className='add_it' onClick={listOfItems}>+</button>

                <ol>
                    {Items.map((itemval,i)=>{
                        return <ToDo text={itemval} 
                        key={i}
                        id={i}
                        onSelect={deleteItem}
                        />;
                    })}
                </ol>
            </div>
        </div>
    </>);
};

export default App;