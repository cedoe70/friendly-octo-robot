import { prisma } from "./db";
import { sendEmailToReceiver } from "./mailer";

export async function createTransaction(data) {
  const tx = await prisma.transaction.create({ data });
  await sendEmailToReceiver(data);
  return tx;
}

export async function getTransactions() {
  return await prisma.transaction.findMany({ orderBy: { createdAt: "desc" } });
}
