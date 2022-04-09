function Witherror(Component) {
    return function WitherrorComponent({...props}){
        return (
            <>
            {!!props.error && <p>{props.error}</p>}
            {props.loading ? (
              <h5>Loading....</h5>
            ) : <Component {...props}/>}
            </>
        )
    }
}

export default Witherror