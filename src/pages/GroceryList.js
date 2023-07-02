import React, { useState, useEffect } from 'react';
import List from '../List'
import Alert from '../Alert.js'
import { useGlobalContext } from '../context';

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (list) {
    return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}

const GroceryList = () => {

    const [ name, setName ] = useState('');
    const [ list, setList ] = useState(getLocalStorage);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ editID, setEditID ] = useState(null);
    const { closeSubmenu } = useGlobalContext()
    const [ alert, setAlert ] = useState({
        show:false, 
        msg:'', 
        type:'' });
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name){
            //display alert
            showAlert(true, 'danger', 'enter value, dawg')
            // setAlert({show:true,msg:'please enter food, dawg',type:'danger'})
        } else if(name && isEditing){
            // deal with edit
            setList(list.map((item) => {
            if(item.id === editID){
                return {...item, title:name}
            }
                 return item
            }))
            setName('')
            setEditID(null)
            setIsEditing(false)
            showAlert(true,'success','edit complete')
        }
               
        else {
            //show alert
            showAlert(true,'success','Great choice!')
            const newItem = {id: new Date().getTime().toString(),
                 title: name};
                 setList([...list, newItem]);
                 setName('')
        }
    }
        const showAlert = (show=false, type='',msg='') => {
            setAlert({show,type,msg})
        }
        const clearList = () => {
            showAlert(true,'danger','empty list');
            setList([])
        }
        const removeItem = (id) => {
            showAlert(true,'danger','item removed')
            setList(list.filter((item) => item.id !== id))
        }
        const editItem = (id) => {
            const specificItem = list.find((item) => item.id === id)
            setIsEditing(true);
            setEditID(id)
            setName(specificItem.title)
        }
        useEffect(() => {
            localStorage.setItem('list',JSON.stringify(list))
        }, [list])
    return (
        <section className='section-center-grocery' onMouseOver={closeSubmenu}>
            
            <form className='grocery-form' onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert}
                                            list={list}  />}
               
                <h2>Grocery Shopping List</h2>
                
                <div className='form-control'>
                     <input 
                     type='text' 
                     className='grocery'
                     placeholder='e.g. guacamole'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                      />

                    <button type='submit' className='submit-btn'>
                    {isEditing ? 'edit' : 'submit'}
                     </button>
              
                  </div>
            </form>
            {list.length > 0 && (
               <div className='grocery-container'>
               <List items={list} 
                     removeItem={removeItem} 
                     editItem={editItem} 
               />
               <button className='clear-btn' onClick={clearList}>
                clear items
               </button>
            </div>
            )}
        </section>
    )
}

export default GroceryList;