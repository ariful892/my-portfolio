import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

const serviceId = 'service_dozriqv';
const templateId = 'template_b4phjfh';
const userId = 'ASpTlidVtWRiWrHMq';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {

        const { name, email, subject, message } = data;

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);

        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                //   process.env.REACT_APP_SERVICE_ID,
                //   process.env.REACT_APP_TEMPLATE_ID,
                //   templateParams,
                //   process.env.REACT_APP_USER_ID
                serviceId,
                templateId,
                templateParams,
                userId
            );
            reset();
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div id='contact' className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-secondary font-bold"> Send me a message!</h1>
                    <p className="py-6">Got a question or proposal, or just want to say hello? Go ahead.</p>
                </div>
                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <p className='text-red-500'>Name is required</p>}
                        </div>
                        <div className="form-control">

                            <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <p className='text-red-500'>Email is required</p>}
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="Subject" className="input input-bordered" {...register("subject", { required: true })} />
                            {errors.subject && <p className='text-red-500'>Subject is required</p>}

                        </div>
                        <div className="form-control">

                            <textarea type="text" placeholder="Your message" className="input input-bordered h-24" {...register("message", { required: true })} />
                            {errors.message && <p className='text-red-500'>Message is required</p>}

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-secondary" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Contact;