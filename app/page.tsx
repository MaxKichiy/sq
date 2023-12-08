import { db } from "@/db";
import { users } from "@/db/schema";
import Image from "next/image";

export default async function Home() {
  const data = await db.select().from(users);
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ data:", data);
  return <div className="text-sky-500">Hello World</div>;
}
