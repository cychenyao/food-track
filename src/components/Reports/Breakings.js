const Breakings = (props) => {

 return (<div className="">
 <div >
     <ul className="observations previous-observations">
     {props.dailyValues.map((d, index) => {
         if(d.breaking!==null)
            return  <li id={d.id}>
                <span >
                {d.breaking}
                </span>
            </li>
     })}
     </ul>
 </div>
</div>
)}
export default Breakings;