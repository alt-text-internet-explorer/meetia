import React from "react";
import styles from "./ReviewForm.module.css"
function Form(props){


    return (
        <form>
            <div className={styles.form}>
                <ul className={styles.formcont}>
                    <ul className = {styles.inputTitle}>
                        <label htmlFor="title">Media Title </label>
                        <input
                        type="text"
                        name="Title"
                        id="Title"
                        //value={review.Title}
                        //onChange={handleChange}
                        />  
                    </ul>
                    <ul className = {styles.inputBody}>
                        <label htmlFor="body">Review Body </label>
                        <input
                        type="text"
                        name="Body"
                        id="Body"
                        //value={review.Body}
                        //onChange={handleChange}
                        />
                    </ul>
                <input type="button" value="Submit Review"/>
                </ul>
            </div>
        </form>
    );
}

export default Form;