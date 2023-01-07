import Layout from "../components/layout";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const messages = await prisma.contact.findMany();
  return {
    props: {
      messages,
    },
  };
};

const effacer = (item) => {
  fetch("/api/contact", {
    method: "DELETE",
    body: item,
  }).then((res) => {
    console.log("Response received");
    if (res.status === 200) {
      toast.success("Message effacé");
      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    }
  });
};

const Gestion = ({ messages }) => {
  const router = useRouter();

  if (router.query.administred === "ok") {
    return (
      <Layout>
        <div>
          {messages.map((item, id) => (
            <ul key={id}>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.message}</li>
              <li>{item.date}</li>
              <li>
                <button onClick={effacer(item.email)}>Effacer</button>
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
