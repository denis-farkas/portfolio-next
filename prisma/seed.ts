import { projects } from "./data/projects";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  try {
    await prisma.project.createMany({
      data: projects,
    });
  } catch (error) {
    console.log(error);
  }
};

main();
