import {useCallback,useState} from 'react';
// this is a hook for sending and getting data from firebasee
// this hook work only with json data
function useHttp() {
    const[ error,setError]=useState(null);
    const[isLoading,setIsLoading]=useState(false);
  const sendRequest = useCallback(async (requestConfig, loadedData) => {
    setIsLoading(true);

         const response = await fetch(requestConfig.url,{
            method: requestConfig.method ? requestConfig.method :"GET",
            headers: requestConfig.headers ? requestConfig.headers :{},
            body: requestConfig.body? JSON.stringify(requestConfig.body):null
         });

         if (!response.ok) {
             throw new Error('Request failed');
         }
         const data = await response.json();
        loadedData(data);
     

     
 }, []);

return {sendRequest,
    error,
    isLoading};
}

export default useHttp;