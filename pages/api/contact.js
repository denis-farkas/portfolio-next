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
}
