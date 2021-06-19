import { useState, useEffect } from 'react';

const useFetch = (url) => {
    let urlType = url.split("/").pop()
    console.log("urlType", urlType)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();

        setTimeout(() => {
        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                console.log("data abc", data)
                if(urlType==="people"){
                    console.log("print here")
                    data.sort((a,b)=> {
                        if(a.name>b.name)
                        return 1;
                        else{
                            return -1;
                        }
                    })
                }
                // data.sort((a,b) => Number(a.id)- Number(b.id))
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log('fetch aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }     
            })
        }, 1000);
             return () => abortCtrl.abort();

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;