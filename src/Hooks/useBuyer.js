import { useEffect, useState } from "react"

const useBuyer = email =>{
    const [isBuyer, setIsBuyer] = useState('')
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://product-resale-server.vercel.app/user/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsBuyer(data.isBuyer)
                setIsBuyerLoading(false)
            })
        }
    },[email]);
    return [isBuyer,isBuyerLoading]
}

export default useBuyer ;