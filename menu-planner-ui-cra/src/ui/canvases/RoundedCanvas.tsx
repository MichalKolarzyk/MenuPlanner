import React from "react";

const RoundedCanvas = (props : any) =>{
    return <div className="bg-gray-100 rounded-md">
        {props.children}
    </div>
}

export default RoundedCanvas;