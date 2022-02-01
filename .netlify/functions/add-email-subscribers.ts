// import axios from 'axios';

// const handler = async (event, context) => {
//     const listId = '176b82970e';
//     const apiKey = '33383e3e58cf7088bcdf48418a9b5f79-us5';

//     const body = JSON.parse(event.body);
//     const { email_address, merge_fields } = body;

//     if (!email_address) {
//         return {
//             statusCode: 400,
//             body: JSON.stringify({ message: 'Please provide an email address.'}),
//         }
//     }

//     try {
//         const payload = {
//             email_address,
//             merge_fields,
//             status: 'subscribed',
//         }
        
//         const { data } = await axios.post(`https://us5.api.mailchimp.com/3.0/lists/${listId}/members`,
//         payload,
//         {
//             headers: {
//                 Authorization: `Basic ${apiKey}`,
//             }
//         }
//         );
        
//         return {
//             statusCode: 200,
//             body: JSON.stringify(data)
//         }
//     } catch (error) {
//         console.log(error);
       
//         return{
//             statusCode: 500,
//             body: JSON.stringify(error),
//         }

//     }
// };

// export {
//     handler
// }