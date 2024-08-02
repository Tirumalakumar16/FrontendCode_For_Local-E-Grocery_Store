import React, { useEffect } from 'react'
import { getRequest } from '../jsCode/Customer'

function Payments() {



    useEffect(()=>{
            getRequest(
                "GET",
                `http://localhost:8888/www.localGrocery.com/customer/api/customer/payments`
            ).then((response)=>{
                console.log(response);
            }).catch(err => console.log(err))
    },[])
  return (
    <div>
      hello
    </div>
  )
}

export default Payments
