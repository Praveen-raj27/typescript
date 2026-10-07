
type GreerProps={
    name: string,
    count?: number,
    isLoggedIn: boolean
} 
function Greet(props: GreerProps){
    const {count = 0} = props
    return (
        <div>{
            props.isLoggedIn ? <h2>Welcome {props.name}, you have {count} messages to read</h2> : <h2>Welcome Guest</h2>
            }
            
        </div>
    )
}
export default Greet