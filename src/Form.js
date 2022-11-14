import React from "react";

function Form ( handleChange, handleSubmit, post ){
    return (
        <form>
            <input 
            name="Lname"
             onChange={handleChange}
              type="text"
                placeholder="name" />
            <input name="githubLink" onChange={handleChange} type="text" placeholder="github link" />
            <input name="mailAdd" onChange={handleChange} type="text" placeholder="Mail Address" />
            <input name="phoneNo" onChange={handleChange} type="text" placeholder="Whatsapp Number" />
            <input name="linkedinAc" onChange={handleChange} type="text" placeholder="LinkedIn profile link" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};
export default Form;