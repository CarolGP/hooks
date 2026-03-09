import { useState, useEffect} from 'react';

const useFetchCharacters = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((dataApi) => {
            console.log(dataApi);
            setData(dataApi);
        });
    }, [url]);

    return data;
};

export default useFetchCharacters;

