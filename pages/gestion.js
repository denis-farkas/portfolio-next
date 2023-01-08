import Layout from "../components/layout";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import { toast } from "react-toastify";
import styles from "../styles/gestion.module.css";

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const messages = await prisma.contact.findMany();
  return {
    props: {
      messages,
    },
  };
};

const Gestion = ({ messages }) => {
  const router = useRouter();

  async function deleteMessage(id) {
    await fetch(`/api/message/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      router.push("/admin");
    }, 3000);
  }

  if (router.query.administred === "ok") {
    return (
      <Layout>
        <div className={styles.contain}>
          {messages.map((item, id) => (
            <ul className={styles.liste} key={id}>
              <li className={styles.message}>ID : {item.id}</li>
              <li className={styles.message}>Nom : {item.name}</li>
              <li className={styles.message}>Email : {item.email}</li>
              <li className={styles.message}>
                <p className={styles.message_text}>Message : {item.message}</p>
              </li>
              <li className={styles.message}>Date : {item.date}</li>
              <li className={styles.message}>
                <button
                  className={styles.bouton}
                  onClick={() => deleteMessage(item.id)}
                >
                  Effacer
                </button>
              </li>
            </ul>
          ))}
        </div>
      </Layout>
    );
  }
};

export default Gestion;
