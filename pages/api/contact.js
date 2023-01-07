import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const prospect = await prisma.contact.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date: req.body.date,
      },
    });
    res.json(prospect);
  }

  if (req.method === "GET") {
    const contacts = await prisma.contact.findMany();
    res.status(200).json(contacts);
  }

  if (req.method === "DELETE") {
    handleDELETE(contactEmail, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
// DELETE /api/post/:id
async function handleDELETE(contactEmail, res) {
  const message = await prisma.contact.delete({
    where: { email: contactEmail },
  });
  res.json(contact);
}
