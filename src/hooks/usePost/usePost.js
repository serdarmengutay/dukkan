import { useState } from 'react';
import axios from 'axios';

function usePost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url, apiData) => {
        try {
            setLoading(true);
            const { data: responeData } = await axios.post(url, apiData);
            setData(responeData);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return { data, loading, error, post };
}

export default usePost;
