import { SignupData } from "../../app/(pages)/(auth)/signup/page";

const API_ENDPOINT = 'http://salesmodulexyz.us-east-1.elasticbeanstalk.com/api/user/register';

export const store = async (data : SignupData) => {


    const requestBody = {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,

    }

    try {
        const res = await fetch(`http://salesmodulexyz.us-east-1.elasticbeanstalk.com/api/User/register`, {
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

        
        // const res = await fetch(API_ENDPOINT, {
        //     method: 'POST',
        //     credentials: 'omit',
        //     mode: "no-cors",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //         "Authorization": `Basic ${token}`
    
        //     },
        //     body: formData.toString(),
        // })
        // console.log(res)
    
        // if (!res.ok) {
        //     const errorData = await res.json();
        //     throw new Error("Error sending customer data" || errorData.message );
        // }

        // // handle successful response 
        // const jsonData = await res.json();
        // return jsonData;

        if (contentType && contentType.includes("application/json")) {
            const jsonData = await res.json();
            return jsonData;
        }

        return {}; // Return an empty object if no JSON response


    } catch (error) {
        console.error('Error:', error);
        throw error;
    }

};


// Alt

// import { SignupData } from '../../app/(pages)/(auth)/signup/page';

// const API_ENDPOINT = 'http://salesmodulexyz.us-east-1.elasticbeanstalk.com/api/User/register';

// export const store = async (data: SignupData) => {
// 	const requestBody = {
// 		email: data.email,
// 		password: data.password,
// 		confirmPassword: data.confirmPassword,
// 	};

// 	console.log('Request Body:', JSON.stringify(requestBody, null, 2));

// 	try {
// 		const res = await fetch(API_ENDPOINT, {
// 			method: 'POST',
//             mode: "no-cors",
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Accept: 'text/plain',
// 			},
// 			body: JSON.stringify(requestBody),
// 		});

// 		console.log('Response Status:', res.status);
// 		console.log(
// 			'Response Headers:',
// 			JSON.stringify(Object.fromEntries(res.headers), null, 2)
// 		);

// 		if (!res.ok) {
// 			let errorMessage = `Error sending customer data: ${res.status} ${res.statusText}`;
// 			const contentType = res.headers.get('Content-Type');
// 			console.log('Error Content-Type:', contentType);

// 			try {
// 				const errorText = await res.text();
// 				console.log('Error Response Body:', errorText);
// 				errorMessage += ` - ${errorText}`;
// 			} catch (e) {
// 				console.log('Failed to read error response body');
// 			}

// 			throw new Error(errorMessage);
// 		}

// 		const contentType = res.headers.get('Content-Type');
// 		if (contentType && contentType.includes('application/json')) {
// 			const jsonData = await res.json();
// 			console.log('Response Data:', JSON.stringify(jsonData, null, 2));
// 			return jsonData;
// 		}

// 		console.log('No JSON response');
// 		return {}; // Return an empty object if no JSON response
// 	} catch (error) {
// 		console.error('Error:', error);
// 		throw error;
// 	}
// };