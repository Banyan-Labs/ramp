const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <br />
        <label>Email</label>
        <input type="email" name="email" />
        <br />
        <label>Message</label>
        <input type="text" name="message" />
      </form>
    </div>
  );
};

export default ContactForm;
