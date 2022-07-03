import React, { useState } from "react";
import Button from "../Button/Button";

/** 
* define a form component to be used throughout the site
* @arg onSubmit
*   an onSubmit function that accepts two args event and form
* @arg formInputs
*   a formInput list that contains the inputs needed for the game
*   each input should contain id, name, type, label
*   this is used in the Card component, it takes the formInputs arg from it
* @arg checkBox
*   indicate what type of checkBox is used
*   it takes the checkBox arg from the Card component
*/

export default function Form({ onSubmit, formInputs, checkBox }) {

    // create an object that contains the checkBox name and asign its value to be false
    const key = checkBox;
    let obj = {};
    obj[key] = false

    const [form, setForm] = useState({ ...obj });
    const [checked, setChecked] = useState(true);

    // handle the changes when user types in the input
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    // handle changing true/false when user click the check box
    function handleCheck(event) {
        setChecked(!checked);
        setForm({
            ...form,
            [event.target.name]: checked
        });
    }

    // handle the Clear button
    function handleClear(event) {
        event.preventDefault();
        setForm({});
        setChecked(false);
        window.location.reload();
    }

    return (
        <form className="border-top" onSubmit={(event) => onSubmit(event, form)}>
            {/* check to see what checkBox value is to render the check box */}
            {checkBox !== null ? (
                <div className="form-check mb-2 mt-3">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={checked} 
                        id={key}
                        name={key}
                        onChange={handleCheck} />
                    <label className="form-check-label" htmlFor="decode">
                        Decode
                    </label>
                </div>
            ) : "" }
            {/* render each element of the formInputs */}
            {formInputs.map(({ type="textarea", label, name, id }) => {
                return (
                    <div key={id} className="mb-2">
                        <label htmlFor={label}>{label}</label>
                        {type === "textarea"
                            ? <textarea
                                id={id}
                                name={name}
                                className={"form-control"}
                                value={form[name]}
                                onChange={handleChange}
                                rows="5" />
                            : <input
                                id={id}
                                type={"text"}
                                name={name}
                                className={"form-control"}
                                value={form[name]}
                                onChange={handleChange} />
                        }  
                    </div>
                )
            })}
            {/* include two butons for Clear and Submit */}
            <div className="d-flex justify-content-left">
                <Button children={"Clear"} handleClick={handleClear} />
                <Button type="submit" children={"Submit"} />
            </div>
        </form>
    )
}