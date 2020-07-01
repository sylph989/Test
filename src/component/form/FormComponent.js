import React from 'react';
import {Formik, Field, FormikProps} from 'formik';
import SelectionComponent from '../selection/Selection'

/*
const initialVal = {
    EvalItems:{no:'123', itemname:'question 1', options:[{itemname:'o1', index:'1', ischecked=false}, {itemname:'o2', index:'2', ischecked=false}]}
  , EvalItems:{no:'456', itemname:'question 2', options:[{itemname:'o1', index:'1', ischecked=false}, {itemname:'o2', index:'2', ischecked=false}]}
}
*/
const initialVal = [
    {evalItem: { no:'1', itemname:'item 1', itemtype:'select', options: [{itemname:'o1', index:'1', ischecked: false}, {itemname:'o2', index:'2', ischecked: false}] }}
    ,{evalItem: { no:'2', itemname:'item 2', itemtype:'select', options: [{itemname:'o1', index:'1', ischecked: false}, {itemname:'o2', index:'2', ischecked: false}] }}
];
const FormComponent = ({})=>(
    <div>
        <h1>Test</h1>

        <Formik
            initialValues={initialVal}
            onSubmit = {(values, actions)=>{
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
            }}
            render={(props) =>(
                <form onSubmit={props.handleSubmit}>
                    <div>
                        {
                            props.values.map((item)=>(
                                <div>
                                    <label>{item.evalItem.itemname}</label>
                                    <Field name="evalItem"
                                        render={({field}) => (
                                            <select>
                                            {
                                                field.evalItem.options.map((o)=>
                                                    <option key={o.index}>{o.itemname}</option>
                                                )
                                            }
                                            </select>
                                        )}>
                                        
                                    </Field>
                                </div>
                            ))
                        }
                        
                    </div>
                </form>
            )}
        >
            
        </Formik>
    </div>
);

export default FormComponent;