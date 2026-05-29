import Link from "next/link"
import Image from "next/image"
import styles from "@/components/customize-profile/CustomizeProfile.module.css"

function Customize({}) {
  return (
    <form onSubmit={submitForm}>
      <h1>Login</h1>
      <div className={styles.form}>
        <div className={styles.formcont}>
          <div className={`${styles.inputGroup} form-group`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={creds.username}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.inputGroup} form-group`}>
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              value={creds.pwd}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className={styles.inputGroup}>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
        </div>
      </div>
      <p>{message}</p>
    </form>
  )
}

export default Customize
