import { SignupData } from "../../app/(pages)/(auth)/signup/page";

export const store = async (data : SignupData) => {


    const requestBody = {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,

    }

    try {
        const res = await fetch(`/api`, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });

        const contentType = res.headers.get("Content-Type");

        // Check if the response is ok
        if (!res.ok) {
            let errorMessage = 'Error sending customer data';
            if (contentType && contentType.includes("application/problem+json")) {
                const errorData = await res.json();
                errorMessage = errorData.detail || errorData.title || errorMessage;
            } else {
                // Try to parse error response if possible
                try {
                    const errorData = await res.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    // If parsing fails, keep the default error message
                }
            }
            throw new Error(errorMessage);
        }

    

        if (contentType && contentType.includes("application/json")) {
            const jsonData = await res.json();
            return jsonData;
        }

        return {}; 
        // Return an empty object if no JSON response


    } catch (error) {
        console.error('Error:', error);
        throw error;
    }

};


