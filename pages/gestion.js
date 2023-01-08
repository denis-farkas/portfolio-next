import Layout from "../components/layout";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import { toast } from "react-toastify";

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
    await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });
  }

  if (router.query.administred === "ok") {
    return (
      <Layout>
        <div>
          {messages.map((item, id) => (
            <ul key={id}>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.message}</li>
              <li>{item.date}</li>
              <li>
                <button onClick={() => deleteMessage(item.id)}>Effacer</button>
              </li>
            </ul>
          ))}
        </div>
      </Layout>
    );
  } else {
    return "";
  }
};

export default Gestion;
