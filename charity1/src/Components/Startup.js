

import React from 'react'
import{Link,useNavigate} from 'react-router-dom'
import Another from './Another'
import './Startup.css'




export default function Startup() {
        let history=useNavigate();
         history('/');

        console.log(Another);
      
  return (
    <div className='background'>
        <h1>Start Up information</h1>
        <div className='tablecard'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rs.</th>
                    </tr>
                </thead>
    
            <tbody>{

                Another.map((item)=>{
                    return(
                        <tr>
                            <td>{item.a}</td>
                          <td>{item.b}</td>
                             <td>{item.c}</td>

                        </tr>
                    )
                }
                  )

                }
            </tbody>
             </table>
        </div>

    </div>
  )
}
