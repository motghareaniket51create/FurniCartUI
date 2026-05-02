import { useEffect,useState } from 'react';
import { homeWrapper } from './home.styled';

function Home({ keycloak }){
    const [data,setData] = useState([]);

    console.log(keycloak.token);
   useEffect(()=>{ 
      const fetchData = async () => {
         try{
            const response = await fetch("http://localhost:8082/home",{
               method: "GET",
               headers: {
                  "authorization": `Bearer ${keycloak.token}`,
                  "Content-Type": "application/json",

               }
            });
            const data = await response.json();
            setData(data);
         }
         catch(error){
            console.error("Error fetching data:", error);
         }
      }
      fetchData();
   },[keycloak]); 
   return (
      <homeWrapper>
         {data.message}
      </homeWrapper>
   )
};

export default Home;
