import React, {useState} from "react";

function ListDisplay({logs}) {
   //console.log(name)
    
    return (
        <div>
            <h2>Beverages consumed</h2>
        <ul>
            {logs.map((log) => {
                return (
                    <li className="listItem" key={log.id}>
                        <p>Drink: {log.name}</p>
                        <p>Points: {log.points}</p>
                        <p>Date: {log.date}</p>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

export default ListDisplay