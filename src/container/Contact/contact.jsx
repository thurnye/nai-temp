import React from 'react';
import { useState } from 'react';
import Nav from '../../components/NavBar/nav'
// import Form from 'react-bootstrap/Nav';
import Flower4 from '../../public/images/flower4.jpeg'
import { send } from 'emailjs-com';
import './contact.css'


export default function Contact() {

    const [toSend, setToSend] = useState({
        from_name: '',
        from_company: '',     
        message: '',
        reply_to: '',
        alertMessage : " ",
        statusCode: ''
             
        
      });
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      
      let status;
     

    //   var alertBox =
    //     '<div class="alert ' +
    //     messageAlert +
    //     ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
    //     messageText +
    //     "</div>";

      const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_SERVICEID,
            process.env.REACT_APP_TEMPLATEID,
          toSend,
          process.env.REACT_APP_USERID
        )
          .then((response) => {
            console.log(response.status)
            setToSend({
                alertMessage : 'Your message was sent, thank you. I will get back to you soon.',
                statusCode: response.status,
            })
            
            
        }).then(()=>{
            setTimeout(()=>{ window.location.reload() }, 2000);
            
        })
        .catch((err) => {
            console.log(err.status)
            setToSend({
                alertMessage : 'Email sent failed',  
                statusCode : err.status,
            })
          });
      };

      console.log(toSend.statusCode)
    
    return (
        <React.Fragment>
            <Nav />
            <section className="contact">
                <article className="container bioSection">
                    <div class="container">
                    
                        <div class="row">
                            <div class="col-sm-4 bioImg">
                                <img className="d-block w-100" src={Flower4} alt="First slide" />
                            </div>
                            <div class="col-sm-8">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est velit et culpa nemo, impedit voluptates, eveniet, rerum ad alias dolorem ducimus laborum provident quam asperiores autem vero voluptate non natus libero eaque recusandae. Laborum nulla impedit molestias ea rerum.</p>
                            </div>
                        </div>
                    </div>
                </article>
                
                <article className="container contactForm">
                <form id="contact-form" onSubmit={onSubmit}  role="form">
                    <div class="messages"></div>
                    {/* {toSend.alertMessage} */}
                    {toSend.statusCode === 200 ? 
                        <div class="alert alert-success" role="alert">
                        Your message was sent, thank you. I will get back to you soon.
                      </div>
                    : ''}
                    {toSend.statusCode === 400 ? 
                        <div class="alert alert-danger" role="alert">
                            Message failed to send, Don't worry you can try again...
                      </div>
                    : ''}
                    <div class="controls">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_name">Name *</label>
                                    <input 
                                    id="form_name" 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Please enter your name *" 
                                    required="required" 
                                    data-error="Name is required."
                                    name='from_name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_company">Company <i className="text-muted">(optional)</i></label>
                                    <input 
                                    id="form_company" 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="company name"
                                    name='from_company'
                                    value={toSend.from_company}
                                    onChange={handleChange}/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_email">Email *</label>
                                    <input 
                                    id="form_email" 
                                    type="email" 
                                    name='reply_to' 
                                    class="form-control" 
                                    placeholder="Please enter your email *" 
                                    required="required" 
                                    data-error="Valid email is required."
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_message">Message *</label>
                                    <textarea id="form_message" 
                                    name="message" 
                                    class="form-control" 
                                    placeholder="Message for me *" 
                                    rows="4" required="required" 
                                    data-error="Please,leave us a message."
                                    value={toSend.message}
                                    onChange={handleChange}
                                    ></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-success btn-send" value="Send message"/>
                            </div>
                        </div>
                    </div>

                </form> 
            </article>
        </section>
        </React.Fragment>
    )
}

 