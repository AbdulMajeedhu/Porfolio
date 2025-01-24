function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p className="contact-words">If you are interested in working with me or have any questions, feel free to get in touch!</p>
                <div className="contact-info">
                    <p>Email: <span>abdulmajeedhu6283@gmail.com</span></p>
                    <p>Phone: <span>+91 8124320070</span></p>
                    <a href="https://www.linkedin.com/in/abdul-majeedhu-a-b73587271/" className="linkedin">
                        <i 
                            className="fa-brands fa-linkedin" 
                            style={{ fontSize: '30px', marginTop: '10px', color: 'beige', backgroundColor: 'blue' }}
                        ></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
