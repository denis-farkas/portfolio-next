import Layout from "../components/layout";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

export const getStaticProps = async () => {
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
  function convert(item) {
    const fecha = new Date(item);
    return fecha.toLocaleDateString();
  }

  if (router.query.administred === "ok") {
    return (
      <Layout>
        <div>
          {messages.map((item, id) => (
            <ul key={id}>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.message}</li>
              <li>{`${convert(item.date)}`}</li>
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
