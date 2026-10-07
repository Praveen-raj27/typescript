export type ProfileProps={
    name: string
}
export const Profile=({name}: ProfileProps)=>{
    return(<>Private profile. Name is {name}</>)
}