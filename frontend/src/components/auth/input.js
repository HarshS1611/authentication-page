import React from 'react';


const Input = ({ name, handleChange, label, half, autoFocus, type, placeholder }) => (
    <div item xs={12} sm={half ? 6 : 12}>
        <input
            className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment: (
                    //   <InputAdornment position="end">
                    //     <IconButton onClick={handleShowPassword}>
                    //       {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    //     </IconButton>
                    //   </InputAdornment>
                    <>...</>
                ),
            } : null}
        />
    </div>
);

export default Input;