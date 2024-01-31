const DataDisplay = ({data})=>{
    console.log(data);
    return(
        <div   > 
       <h2 >Data Display</h2>
       {data.length==0 ? (<p>No data to display</p>):(<ul>{data.map((item)=>{
       return <div className="post-container">
        <h3>Title:{item.title}</h3>
        <h4>UserId:{item.id}</h4>
        <p>description: {item.body}</p>
       </div>
       })}</ul>)}
        </div>
    )
}
export default DataDisplay