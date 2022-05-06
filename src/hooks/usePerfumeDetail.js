import { useEffect, useState } from "react"

const usePerfumeDetail = id => {
    const [perfumeDetail, setPerfumeDetail] = useState({});
    useEffect(() => {
        const url = `https://arcane-wave-63759.herokuapp.com/perfume/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfumeDetail(data));
    }, [id]);
    return [perfumeDetail, setPerfumeDetail];
}

export default usePerfumeDetail;