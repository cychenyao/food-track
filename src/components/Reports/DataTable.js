import { dblClick } from "@testing-library/user-event/dist/click"

const DataTable = (props) => {
    return <table className="en demographics-table">
        <thead >
            <tr>
                {props.headers.map((header, index)=>{
                return <th id={header.id}>{header.title}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {props.bodys.map((bd, index)=>{
                return (<tr>
                    {bd.map((value, index)=>{
                    return <th id={value.id}>{value.title}</th>
                    })}
                </tr>)
            })}
        </tbody>
    </table>
}
export default DataTable;