import styles from "../styles/formul.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Formul = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    const date = Date.now().toString();
    let data = {
      name,
      email,
      message,
      date,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        toast.success("Message envoyé");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    });
  };

  return (
    <div className={styles.container_formul}>
      <form className={styles.main} onSubmit={handleSubmit}>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required="required"
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className={styles.inputField}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required="required"
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            className={styles.textarea}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required="required"
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <input type="submit" className={styles.submitButton} />
        </formGroup>
      </form>
    </div>
  );
};

export default Formul;
