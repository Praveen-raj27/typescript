type ContainerPorps={
    styles: React.CSSProperties
}
export const Container=(props:ContainerPorps)=>{
    return <div style={props.styles}> text content</div>
}