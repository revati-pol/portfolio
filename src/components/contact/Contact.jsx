import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact(props) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_qrqmkil', 'template_wvoe3hk', form.current, '7Zyp1mFf4HwtAf2QV')
          .then(
            () => {
              console.log('SUCCESS!');
               // Alert message for successful email sending
               alert("Your message has been sent successfully!");
               form.current.reset(); // Optionally reset the form after success
            },
            (error) => {
              console.log('FAILED...', error.text);
              // Alert message for failure
              alert("Failed to send the message. Please try again.");
            },
          );
      };
  return (
    <section id="contact">
      <h2> Touch Base With Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4> Email </h4>
            <h5> polrevati24@gmail.com </h5>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=polrevati24@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ping me
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4> WhatsApp </h4>
            <h5> (+91) 8828379148 </h5>
            <a href="https://wa.me/918828379148"> Drop a message </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Write to me.." required></textarea>
            <button type="submit" className="btn btn-primary"> Shoot a text </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
