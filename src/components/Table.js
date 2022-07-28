import React from 'react';

function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>SL No.</th>
                    <th>Date </th>
                    <th>Amount</th>
                    <th>Payment mode</th>
                    <th>Remark</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.date}</td>
                            <td>{data.amount}</td>
                            <td>{data.paymentMode}</td>
                            <td>{data.remark}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;