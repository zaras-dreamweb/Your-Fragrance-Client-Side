import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const searchToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://arcane-wave-63759.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        searchToken();
    }, [user]);
    return [token];

}

export default useToken;