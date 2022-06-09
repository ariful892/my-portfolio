import React from 'react';

const Contact = () => {
    return (
        <div className='text-center my-24'>
            <h1 className='text-center text-3xl text-secondary mb-5'>Contact</h1>
            <input type="text" placeholder="Your Name" class="input input-bordered input-secondary w-full max-w-xs mb-3" /><br />
            <input type="text" placeholder="Your Email" class="input input-bordered input-secondary w-full max-w-xs mb-3" /><br />
            <input type="text" placeholder="Subject" class="input input-bordered input-secondary w-full max-w-xs mb-3" /><br />
            <textarea type="text" placeholder="Message" class="input input-bordered input-secondary w-full max-w-xs mb-3" /><br />
            <button class="btn btn-primary">Send</button>
        </div>
    );
};

export default Contact;