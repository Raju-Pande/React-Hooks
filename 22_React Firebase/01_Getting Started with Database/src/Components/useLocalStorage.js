import { useState, useEffect } from "react";
export default function useLocalStorage() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        let gmail = localStorage.getItem("email");
        if (gmail) {
            setEmail(gmail)
        }
    
        
    }, []);

    useEffect(() => {
        localStorage.setItem("email", email)
    
    }, [email])

    return { email, setEmail }
}