import React from 'react';

export default function Input({
    type,
    name,
    value,
    className,
    placeholder,
    errors,
    onChange
}) {
    return (
        <div className="form-group">
        <input type={type} name={name} className={className} placeholder={placeholder} onChange={onChange} required/>
        <small>{errors}</small>
        </div>
    )
}
