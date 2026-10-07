type StatusProps={
    status: 'loading' | 'success' | 'error'
}
export const Status = (props:StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status==='success'){
        message = 'Data Fetced Successfully'
    }else if(props.status==='error'){
        message ='Error'
    }
  return (
    <div>
     {message}
    </div>
  );
};
