import React from 'react';

export default function Movie(props) {
    return(
        <div>
            <li className="movie-list-item">
                {props.item.title} 
                {props.item.stars}

                <button btn btn-sm="true" btn-danger="true" float-end onClick={()=> 
                props.deleteItem(props.item.id)}>X</button>
            </li>
        </div>
    )
}
