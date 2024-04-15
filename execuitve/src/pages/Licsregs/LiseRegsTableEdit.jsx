import React,{useState,useEffect,useRef} from 'react';
import LiseRegsEdit from './LiseRegsEdit';
import LisRegsTables from './LisRegsTables';
const LiseRegsTableEdit = () => {
  const [showTable1, setShowTable1] = useState(true);  
  const toggleTables = () =>{
    setShowTable1(!showTable1);
  }
  useEffect(() => {
    setShowTable1(showTable1);
      toggleTables();
    
  },[])
  return (
    <div>
         <a href="#" onClick={toggleTables}>
        {showTable1 ? 'Show Component' : 'Show Table'}
      </a>
      {showTable1 ? (
                    <div>
                        <LisRegsTables />
                    </div>  
                    ) : (
                    <LiseRegsEdit />
                    )} 
    </div>
  )
}

export default LiseRegsTableEdit
