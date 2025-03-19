import HomePage from "@/components/templates/homePage";
import { serverFetch } from "@/core/services/http";

export default async function Home() {
  //, searchParams, { cache: "no-store" }
  const data = await serverFetch("tour",);
  console.log(data);
  
  return (
    
    
   <HomePage data={data}/>
    
  );
}
