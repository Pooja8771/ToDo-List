import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    //    setlistData([...listData,activity])
    //    console.log(listData);
    setlistData((listData) => {
      console.log(listData);
      const updatedData = [...listData, activity];
      //console.log(updatedData);
      setActivity("");
      return updatedData;
    });
  }
   // Remove the activity
   function removeActivity(i){
    const updateListdata = listData.filter((elem ,id)=>{
          return i!==id;
    })
    setlistData(updateListdata)

   }

   //Remove All 
    function removeAll(){
      setlistData([])
    }

   
  return (
    <>
      <div className="container">
        <div className="header">TODOLIST</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-Heading">Here is the list :{")"}</p>
       {listData!==[] && listData.map((data ,i)=>{
          return(
            <>
            <p key={i}>
              <div className="listdata">{data}</div>
            <div className="btn-position"><button onClick={()=>removeActivity(i)}>Remove</button></div>
            </p>
            </>
          )
       })}
       {listData.length >=1 && <button onClick={removeAll}>RemoveAll</button>}
       
      </div>
    </>
  );
}

export default TodoList;
