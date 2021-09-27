import { TextField,makeStyles,theme,Button } from '@material-ui/core'
import { useFormik,Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup'


const initialValues ={
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
    errormessage:{
      
    }
})

const LoginUser = () => {

    const classes = useStyles();

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema} 
        >
        <Form> 
            <br/>
            <br/>
            <Field 
                className={classes.formstyles}
                type="text"
                name="email"
                variant='outlined'
                placeholder='Email ID'
                label="Enter Your Email ID "
            />
            <br/>
        <ErrorMessage name="email"  className={classes.errormessage}/>
        
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
        <ErrorMessage name="password"  className={classes.errormessage}/>
        <br/>
          
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Form>
        </Formik>
    )
}

export default LoginUser;