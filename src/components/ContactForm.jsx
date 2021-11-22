import "./contact-form.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <form>
        <label className="contact-header">Contact Us</label>
        <p>This is using command line</p>
        <div className="contact-name">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div className="contact-info">
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" id="" cols="30" rows="4" placeholder="Message..."></textarea>
          <input type="submit" value="Send" className="contact-button" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
