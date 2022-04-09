import React, { useEffect } from 'react'
import { useState } from 'react'

const ForgetPass = ({loadData, saveData, removeData}) => {
    const [passwords, setPasswords] = useState({})

    const submitHandling = (e) => {
        e.preventDefault()
        const target = e.target
        for (let i of target) {
            if (i.name) {
                setPasswords(prevState => ({...prevState, [i.name]: i.value}))
            }
        }
    }

    useEffect(() => {

    }, [passwords])

  return (
        <form onSubmit={submitHandling}>
            <div >
                <label htmlFor='user'>username</label>
                <input type={"text"} name='password1'></input>
            </div>
            <div >
                <label htmlFor='password1'>new password</label>
                <input type={"text"} name='password1'></input>
            </div>
            <div>
                <label htmlFor='password2'>repeated new password</label>
                <input type={"text"} name='password2'></input>
            </div>
            <button type='submit'>submit</button>
        </form>
  ) 
}

export default ForgetPass;
