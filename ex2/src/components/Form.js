import React, { useEffect, useState } from 'react'

const Form = ({loadData, saveData, removeData}) => {
    // console.log(loadData)
    const [info, setInfo] = useState({})

    const submitHandling = (e) => {
        e.preventDefault()
        const target = e.target
        for (let i of target) {
            if (i.name) {
                setInfo(prevState => ({...prevState, [i.name]: i.value}))
            }
        }
    }

    useEffect(() => {
        const myData = loadData()
        Object.entries(info).map(item => {
            saveData(item[0], item[1])
        })
        console.log(info);
        console.log(localStorage);
    }, [info])

    return (
        <form onSubmit={submitHandling}>
            
            <div >
                <label htmlFor='user'>username</label>
                <input type={"text"} name='user'></input>
            </div>
            <div>
                <label htmlFor='password'>pass</label>
                <input type={"text"} name='password'></input>
            </div>
            <button type='submit'>submit</button>
        </form>
  )
}

export default Form;
