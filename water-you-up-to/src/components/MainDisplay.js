import React, {useState, useEffect} from "react";
import ListDisplay from './ListDisplay'

function MainDisplay({Logs}) {



      return (
        <ul>
            <ListDisplay logs={Logs}/>
        </ul>
      )
}

export default MainDisplay