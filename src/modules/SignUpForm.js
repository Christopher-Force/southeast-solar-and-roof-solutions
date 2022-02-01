// import React from "react";
// import { Formik, Form, Field, ErrorMessage, FormikHelpers, useFormik } from "formik"
// import * as Yup from "yup"
// // import axios from "axios";
// import MailchimpSubscribe from "react-mailchimp-subscribe"
// import axios from "axios";

// const SignUpForm = ({ status, message, onValidated }) => {


//     const url = `https://outlook.us5.list-manage.com/subscribe/post?u=3cc1f7b3975d56a5edd4b76f8&amp;id=176b82970e?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

//     // const listId = '176b82970e';
//     // const apiKey = '33383e3e58cf7088bcdf48418a9b5f79-us5';

//     // const body = JSON.parse(Event.body);
//     // const { email_address, merge_fields } = body;

//     const formik = useFormik({
//         initialValues: {
//             firstName: "",
//             lastName: "",
//             email: ""
//         },
//         validationSchema: Yup.object({
//             firstName: Yup.string().max(15, "Must be 15 characters or less.")
//             .required("Required"),
//             lastName: Yup.string().max(20, "Must be 20 characters or less.")
//             .required("Required"),
//             email: Yup.string().max(20, "Must be 20 characters or less.")
//             .email("Invalid email adress. This is required.")
//             .required("Required"),

//         }),
//         onSubmit: async (values) => {
//             const { firstName, lastName, email} = values;
//             try {
//                 const payload = {
//                 merge_fields: {
//                     FNAME: firstName,
//                     LNAME: lastName,
//                 },
//                 email_address: email,
//             };
//             await axios.post('../../.netlify/functions/add-email-subscribers.ts');
//             alert('Contact details were added succesfully');
//             } catch (error) {
//                 alert(error.message);
//             }
            
            

//             // subscribe(values);
//         }
//     });

    
    
    
   

//     return (
//         <div>
//             <Formik>
//                 {/* initial values={{ firstName: 'james', lastName: '', email: ''}} */}
//                 {/* onSubmit={submitForm}> */}
//                         {/* <MailchimpSubscribe url={url}  > */}
//                             <Form onSubmit={formik.handleSubmit} className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
//                                 <input type="hidden" name="form-name" value="contact" />
//                                 <h2 className="text-center text-2xl font-bold text-black">Sign up for our newsletter!</h2>
//                                 <div className="my-2 flex flex-col ">
//                                     <input
//                                     id="firstName"
//                                     name="firstName"
//                                     type="text"
//                                     placeholder="First Name"
//                                     onChange={formik.handleChange}
//                                     value={formik.values.firstName}
//                                     onBlur={formik.handleBlur}
//                                     className="p-2 border-2 border-gray-400 text-black" />
//                                     {formik.touched.firstName && formik.errors.firstName ? <p className="text-red-500">{formik.errors.firstName}</p> : null}
//                                 </div>
//                                 <div className="my-2 flex flex-col ">
//                                     <input
//                                     id="lastName"
//                                     name="lastName"
//                                     type="text"
//                                     placeholder="Last Name"
//                                     onChange={formik.handleChange}
//                                     value={formik.values.lastName}
//                                     onBlur={formik.handleBlur}
//                                     className="p-2 border-2 border-gray-400 text-black" />
//                                     {formik.touched.lastName && formik.errors.lastName ? <p className="text-red-500">{formik.errors.lastName}</p> : null}
//                                 </div>
//                                 <div className="my-2 flex flex-col ">
//                                     <input
//                                     nid="email"
//                                     name="email"
//                                     type="email"
//                                     placeholder="Email"
//                                     onChange={formik.handleChange}
//                                     value={formik.values.email}
//                                     onBlur={formik.handleBlur}
//                                     className="p-2 border-2 border-gray-400 text-black" />
//                                     {formik.touched.email && formik.errors.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
//                                 </div>
//                                 <button
//                                 type="submit"
//                                 disabled={!formik.isValid || !formik.dirty}
//                                 className="my-2 px-4 py-2 bg-blue-700 text-white disabled:opacity-50 transition:all duration-300">Submit</button>
//                             </Form>
//                         {/* </MailchimpSubscribe> */}
//             </Formik>
//         </div>
//     )
// }

// export default SignUpForm;