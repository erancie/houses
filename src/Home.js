import React, {useState, useEffect} from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'


export default function Home() {

 const [state, setState] = useState({
   name: '',
   mobile: '',
   email: ''
 })

 const handleChange = (event) => {
  const {name, value} = event.target
  setState((prev)=>{
    return {
      ...prev,
      [name]: value
    }
  })
 }
 useEffect(()=>{
   console.log(state)
 }, [handleChange])

 const handleSubmit = (e) => {
  e.preventDefault()
  // axios.get('/test') // built route to server
  axios.get('http://localhost:8080/test') // dev route to server
  .then(res=>console.log(res), err=>console.log(err))
 }

  return (
    <div>
      <Container>
        <div className='examples'>
          USE CASE 1, 2, 3
        </div>

        <h3>Access existing personal mortgage data available through open banking.</h3>

        <div className='call-to-action'>
          <p>Utilise existing broker platforms to match customer with a superior product.</p>
          <p>Provide credit quote instantly</p>
          <p>Engage broker networks to do the legwork and meet regulatory requirements</p>

          <p>Same balance</p>
          <p>Same term</p>
          <p>Same features</p>
          <p>Save money</p>
          <p>Save time</p>

        </div>
      </Container>


{/* AUTOMATED SINGLE EMAIL INPUT */}
<Container>
  <div className='auth0'>
          AUTHENTICATION
          Auth0 Sign in 
  </div>
</Container>


{/* WHATEVER AUTH0 DOESNT ASK FOR */}
{/* EXPLICIT MANUAL INPUT */}
      <Form>
        <h3>Manual Data Entry</h3>
        <Form.Control 
               type='text' 
               name='name'
               onChange={handleChange} 
               value={state.name}  
               placeholder='name' /> 
        <Form.Control 
               type='text'
               name='mobile'
               onChange={handleChange} 
               value={state.mobile} 
               placeholder='mobile' /> 
        <Form.Control  
               type='email' 
               name='email'
               onChange={handleChange} 
               value={state.email} 
               placeholder='email' /> 

        <Form.Label>data consent</Form.Label>
        <Form.Control type='checkbox' name='data consent' /> 
        <Form.Label>privacy consent</Form.Label>
        <Form.Control type='checkbox' name='privacy consent'/> 
        <Button onClick={(e)=>handleSubmit(e)}  type='submit'>GET A QUOTE</Button>
      </Form>

      <div className='trust-gainer'>
        Additional User Details from Open Banking API (or similar)
      </div>

      {/* conditional result from form */}
      <div className='credit-quote'>
        <h3>We found these offers for you</h3>
        <div>Offer 1</div>
        <div>Offer 2</div>
        <div>Offer 3</div>
      </div>
    </div>

  )
}
