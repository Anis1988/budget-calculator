import React from 'react'
import { MdDelete,MdEdit } from "react-icons/md";

export default function ExpenseItem({expense ,handleDelete,handleEdit}) {
    const {id,charge,amount} = expense;

    return (
        <li className="item">
            <div className="info">
              <span className="expense">{charge}</span>
              <span className="amount">$ {amount}</span>
            </div>
            <div>
                <button className="edit-btn" arial-label="edit button">
                    <MdEdit onClick={()=>handleEdit(id)}/>
                </button>
                <button className="clear-btn" arial-label="delete button">
                    <MdDelete onClick={() => handleDelete(id)}/>
                </button>
            </div>
        </li>
    )
}
