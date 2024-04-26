import axios from "axios";
import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({});
    useEffect( () => {
        axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then( (response) => {
            setData(response.data['currency'])
        })
        .catch( (error) => {
            console.log("Error Fetching Data From Api")
        })
    } , [data]);

    return data;
}

export default useCurrencyInfo;