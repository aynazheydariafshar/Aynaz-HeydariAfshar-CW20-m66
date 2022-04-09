import React from 'react'


const SaveStorage = ({render}) => {

    const load = () => {
        return {"user": localStorage.getItem("user"), "password": localStorage.getItem("password")}
    }
    const save = (key, val) => {
        localStorage.setItem(key, val)
    }
    const remove = (key) => {
        return localStorage.removeItem(key)
    }

    return (
        <div>
            {render({load, save, remove})}
        </div>
    )
}

export default SaveStorage;
