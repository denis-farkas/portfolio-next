import { useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/admin.module.css";
import { useRouter } from "next/router";

function Admin() {
  const [administre, setAdministre] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (administre === process.env.PASSWORD) {
      console.log("ok");
      setTimeout(() => {
        router.push(
          {
            pathname: "/gestion",
            query: { administred: "ok" },
          },
          "/gestion"
        );
      }, 1000);
    }
  };
  return (
    <Layout>
      <form className={styles.main} onSubmit={handleSubmit}>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="admin">Admin</label>
          <input
            type="text"
            name="admin"
            className={styles.inputField}
            onChange={(e) => {
              setAdministre(e.target.value);
            }}
          />
        </formGroup>
        <formGroup className={styles.inputGroup}>
          <input type="submit" className={styles.submitButton} />
        </formGroup>
      </form>
    </Layout>
  );
}

export default Admin;
