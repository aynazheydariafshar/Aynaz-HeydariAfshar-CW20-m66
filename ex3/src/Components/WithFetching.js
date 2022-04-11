import { useEffect, useState } from 'react'
import axios from 'axios'

function WithFetching(Component , entity){
    return function WithFetchingComponent(props){
        const [data,setdata] = useState([])
        useEffect(() => {
            axios
            .get(`https://jsonplaceholder.typicode.com/${entity}`)
            .then(res => {
                setdata(res.data)
                console.log(res)
            })
        }, [])
        return <>
        <h1>{entity}</h1>
        <Component data = {data} {...props}/>
        </>
    }

    }

export default WithFetching