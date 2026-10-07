type ListProps<T>={
    items: T[],
    onClick: (value:T)=> void,
}
export const List= <T extends React.ReactNode>({items, onClick}:ListProps<T>)=>{
    return(<>
    <h2>List of items</h2>
    {items.map((item, index)=>{
        return (
            <div key={index} onClick={()=>onClick(item)}>{item}</div>
        )
    })}
    </>)
}