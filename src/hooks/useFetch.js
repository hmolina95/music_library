import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [retryTrigger, setRetryTrigger] = useState(0);

    const retry = () => setRetryTrigger(prev => prev + 1);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const result = await res.json();
                const albums = result.album || [];
                setData(albums);
            } catch (err) {
                setError(err.message || 'Ocurrió un error');
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, retryTrigger]);

    return { data, isLoading, error, retry };
};

export default useFetch;
