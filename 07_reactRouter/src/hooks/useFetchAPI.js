import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function useFetchAPI() {
    // const [data, setData] = useState(null);

    // const urlCall = async () => {
    //     try {
    //         const result = await fetch("https://api.github.com/users/sohomz");
    //         const data = await result.json();
    //         console.log(data);
    //         setData(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     urlCall();
    // }, []);

    // return data;
    const data=useLoaderData()
    return data;
}


export default useFetchAPI;

export const githubInfoLoader=async()=>{
  const response=await fetch("https://api.github.com/users/sohomz");
  return response.json();
}