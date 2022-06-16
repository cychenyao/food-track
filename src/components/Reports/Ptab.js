const Ptab =  (props) =>{
    return (
        <p>
            <span className="text-label">
                <span>{props.title}</span>
            </span>
            <span>{props.value}</span>
        </p>
    )
}
export default Ptab;