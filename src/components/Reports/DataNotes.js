const DataNotes = (props) => {
    return (
    <div data-reactid=".0.3.2.0.2.0.2.0.0:$0.1.0.4:$0">
        <h5 data-reactid=".0.3.2.0.2.0.2.0.0:$0.1.0.4:$0.0">{props.title}</h5>
        <ul data-reactid=".0.3.2.0.2.0.2.0.0:$0.1.0.4:$0.1">
            {props.notesDetail.map(note=>{
                return <li id={note.id}>
                    {note.title}
            </li>
            })}
        </ul>
        <cite >
        {props.cite}
        </cite>
    </div>
    )
}
export default DataNotes;