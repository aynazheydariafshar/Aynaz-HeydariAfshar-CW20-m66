import {useState} from 'react'


function WithCounter(Component){
    return function WithCounterComponent(props){
        const [count , setcount] = useState(1000)
        const handlecount = () => {
            setcount(count - 1)
        }
        return <Component handlecount={handlecount} count = {count} {...props}/>
    }
}

export default WithCounter