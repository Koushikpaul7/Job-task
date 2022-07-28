import React from 'react';
import './card.css'
function FormInput({handleChange, formInputData, handleSubmit}){
    return(
       <div className='card text-left color  p-4  mt-5'>
        <h5><u>Recipt Details</u></h5>
         <div className="form-row col ">
          <div className="col  d-flex justify-content-between">
            <label>Date</label>
            <input  type="date" onChange={handleChange} value={formInputData.date} name="date" className="form-control w-50  box color"  placeholder="Enter Date" />
          </div>
          <br />
         
          <div className=" d-flex justify-content-between">
            <label>Amount</label>
            <input type="number" onChange={handleChange} value={formInputData.amount} name="amount" className="form-control w-50 box color" placeholder="Enter Amount (in INR)" />
          </div>
          <br />
          <div className="col">
          <div className=" d-flex justify-content-between">
            <label >Payment Mode</label>
      <select name='paymentMode' onChange={handleChange} value={formInputData.paymentMode} class="form-select w-50 box color">
        <option >Cash</option>
        <option >Card</option>
      </select>
          </div>
          <br />
          <div className="col">
          <div className=" d-flex justify-content-between">
            <label>Remark</label>
            <input type="text" onChange={handleChange} value={formInputData.remark} name="remark" className="form-control w-50 box color" placeholder="Enter Remark" />
          </div>
          </div>
          </div>
          <br />
          <div className="col d-flex justify-content-end ">
            <input type="submit" className="btn btn-danger mx-5" />
            <input type="submit" onClick={handleSubmit} className="btn btn-primary mx-5" />
          </div>
        </div>
     
       </div>

      
    )
    }

export default FormInput;