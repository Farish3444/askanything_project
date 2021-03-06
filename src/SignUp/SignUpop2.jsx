import React from 'react';
import { TextField,makeStyles,theme,Button } from '@material-ui/core'
import { useFormik,Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup'
import '../App.css';


const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
}

const onSubmit =(values) => {
        console.log("formik data's -->",values)
}

// YUP method
const validationSchema= Yup.object({
    firstName:Yup.string().required("Field Required"),
    lastName:Yup.string().required("Field Required"),
    email:Yup.string().email("Invalid Format Email").required("Email ID required"),
    password:Yup.string().required("Enter Valid password"),
    resetpassword:Yup.string().required("Password Incorrect")
})

const useStyles = makeStyles({
    formstyles:{
        margin:"1ch",
        width:'25ch'
    },
   
})

const SignUpop2 = () => {

    const classes = useStyles();

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema} 
        >
        <Form> 
            <br/>
            <Field 
                className={classes.formstyles}
                type='text'
                name='firstName'
                variant='outlined'
                placeholder='First Name'
                label="Enter Your First Name"
            />
            <br/>
        <ErrorMessage name="firstName" className='errormessage' style={{color:'red'}}/>

            <br/>
            <Field
                className={classes.formstyles}
                type="text"
                name="lastName"
                variant='outlined'
                placeholder='Last Name'
                label="Enter Your Last Name"
            />
            <br/>
        <ErrorMessage name="lastName" className='errormessage' />
          
            <br/>
            <Field 
                className={classes.formstyles}
                type="text"
                name="email"
                variant='outlined'
                placeholder=' Email ID '
                label=" Enter Your Email ID "
            />
            <br/>
        <ErrorMessage name="email"  className='errormessage'/>
        
            <br/>
            <Field 
                className={classes.formstyles}
                type="password"
                name="password"
                variant='outlined'
                placeholder='Password'
                label="Enter Your Password"
            />
            <br/>
        <ErrorMessage name="password"  className='errormessage'/>
        <br/>
            <Field 
                className={classes.formstyles}
                type="password"
                name="resetpassword"
                variant='outlined'
                placeholder='Reset Password'
                label="Enter Your Reset Password"
            />
            <br/>
        <ErrorMessage name="resetpassword"  className='errormessage'/>
        <br/>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Form>
        </Formik>
    )
}

export default SignUpop2