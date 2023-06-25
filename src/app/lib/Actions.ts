"use server";
interface formData {
  toolName: string;
  toolImage: string;
  category: string;
  toolDescription: string;
  serialNumber: string;
  purchaseDate: Date;
  brand: string;
  condition: string;
  accessories: string;
}
export default async function ServerComponent({ params }: any) {
  console.log(params);
}
