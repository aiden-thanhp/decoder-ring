import React, { useState } from "react";
import Button from "../Button/Button";

export default function Form({ onSubmit, formInputs, checkBox }) {
    const key = checkBox;
    let obj = {};
    obj[key] = false
    const [form, setForm] = useState({ ...obj });
    const [checked, setChecked] = useState(true);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    function handleCheck(event) {
        setChecked(!checked);
        setForm({
            ...form,
            [event.target.name]: checked
        });
    }

    function handleClear(event) {
        event.preventDefault();
        setForm({});
        setChecked(false);
        window.location.reload();
    }

    return (
        <form className="border-top" onSubmit={(event) => onSubmit(event, form)}>
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
            <div className="d-flex justify-content-left">
                <Button children={"Clear"} handleClick={handleClear} />
                <Button type="submit" children={"Submit"} />
            </div>
        </form>
    )
}