import { PersonProps } from "./person.type"

function Person(props:PersonProps){
    return (<>
        {props.name.first} {props.name.last}
    </>)
}
export default Person