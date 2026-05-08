import React from "react";
import styles from "./ReviewForm.module.css"
import Dropdown from "./ReviewFormDropdown";

function Form(props){


    return (
        <form>
            <div className={styles.form}>
                <ul className={styles.formcont}>
                    
                    <label htmlFor="type">Media Type </label>
                    <Dropdown/>

                    <label htmlFor="title">Media Title </label>
                    <input
                    type="text"
                    name="Title"
                    id="Title"
                    className = {styles.inputTitle}
                    //value={review.Title}
                    //onChange={handleChange}
                    />  

                    <label htmlFor="body">Review Body </label>
                    <textarea
                    type="text"
                    name="Body"
                    id="Body"
                    className = {styles.inputBody}
                    //value={review.Body}
                    //onChange={handleChange}
                    />
                    
                <input 
                type="button" 
                value="Submit Review"
                className = {styles.button}
                    />
                </ul>
            </div>
        </form>
    );
}

export default Form;