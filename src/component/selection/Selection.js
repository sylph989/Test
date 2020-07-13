import React from 'react';
import {Formik, Field} from 'formik';
const SelectionComponent = ({field, evalItem, ...props}) => (
    <div>
        <pre>{JSON.stringify(props)}</pre>
        <div>
            <label>{props.itemname}</label>
            <select>
            {
                props.options.map((o)=>
                    <option key={o.index}>{o.itemname}</option>
                )
            }
            </select>
        </div>
    </div>
);

export default SelectionComponent;