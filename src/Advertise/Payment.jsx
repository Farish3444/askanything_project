import React,{useState} from 'react'
import {TextField,Button} from '@material-ui/core';



const Payment = () => {
    
    const [form, setform] = useState({
    cardNumber:"",
    cardHolderName:"",
    monthYear:"",
    cvv:""
})

const [submit, setSubmit] = useState(false)
const [valid, setvalid] = useState(false)
const errormsg = (<p style={{color:'red',marginTop:'0%' }}>Invalid Input</p>)

const handleCardNumber=(e)=>{
    setform({...form,cardNumber:e.target.value})
}
// 
const handleCardHolderName=(e)=>{
    setform({...form,cardHolderName:e.target.value})
}
// 
const handleMonthYear=(e)=>{
    setform({...form,monthYear:e.target.value})
}
// 
const handleCVV=(e)=>{
    setform({...form,cvv:e.target.value})
}

const validateForm=(e)=>{
     e.preventDefault();
     if(form.cardNumber && form.cardHolderName && form.monthYear && form.cvv){
         setvalid(true)
        }
        setSubmit(true)
        console.log(form)
    }

    return (
        <div style={{margin:'3%'}}>

        <h1 style={{marginLeft:'-20%'}}>PAYMENT INFORMATION</h1>
        <hr />
            <form className='formTable'>
                <TextField
                  multiline={false}
                  placeholder="0000 0000 0000 💳︎"
                  InputLabelProps={ { shrink: true } }
                  label='Card Number'
                  variant='outlined'
                  style={{width:'30%'}}
                  value={form.cardNumber}
                  onChange={handleCardNumber}
                />

                &emsp;
                &emsp;
                {submit && !form.cardNumber ? (errormsg):null}
                {/*  */}
                <TextField 
                    label="MM/YY"
                    variant='outlined'
                    style={{width:'10%'}}
                    value={form.monthYear}
                    onChange={handleMonthYear}
                />
                &emsp;
                &emsp;
                {submit && !form.monthYear ? (errormsg):null}
                {/*  */}
                <TextField 
                    label="CVV"
                    variant='outlined'
                    style={{width:'10%'}}
                    value={form.cvv}
                    onChange={handleCVV}
                />
                &emsp;
                &emsp;
                {submit && !form.cvv ? (errormsg):null}
                <br/>
                {/*  */}
                <TextField
                    label="Card Holder Name"
                    style={{margin:'2%',width:'30%',marginLeft:'-27%'}}
                    variant='outlined'
                    value={form.cardHolderName}
                    onChange={handleCardHolderName}
                />
                <br/>
                <br/>
                {submit && !form.cardHolderName ? (errormsg):null}
                {/*  */}
            <Button variant='contained' color="primary" onClick={validateForm}>Submit</Button>
                {submit && valid  ? <p style={{color:'green'}}>Process is Loading successfully....Please wait</p>:null} 
            </form>
        </div>
    )
}

export default Payment