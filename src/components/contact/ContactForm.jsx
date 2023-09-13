import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current)
        emailjs.sendForm('service_furkxvl', 'template_twirbdf', form.current, 'U9V5NtiwodLVLg30L')
            .then((result) => {
                result.status === 200 && toast("You have successfully sent the message!")
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <Card color="transparent" shadow={false} className='my-5'>
            <Typography variant="h4" color="white" className='text-bold text-center text-[white]'>
                Send Message
            </Typography>
            <Typography color="white" className="mt-1 font-normal text-center">
                Enter your details to message.
            </Typography>
            <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                <div className="mb-4 flex flex-col gap-6">
                    <Input color="white" size="lg" label="Name" name='from_name' />
                    <Input type="email" color="white" size="lg" label="Email" name='from_email' />
                    <Textarea className='text-[white] bg-[white] textArea' label="Textarea" name="message" />
                </div>
                <Button type="submit" className="mt-6 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]" fullWidth>
                    Send Message
                </Button>
            </form>
            <ToastContainer />
        </Card>
    )
}

export default ContactForm