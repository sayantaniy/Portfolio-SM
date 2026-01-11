const CONTACT_DATA = {
  location: 'Howrah, India 711104',
  phone: '+919163080086',
  email: 'sayantanimanna139@gmail.com',
};

export const Contact = () => {
  return (
    <section className="contact-section glass">
      <h2 className="section-title">Contact</h2>
      <div className="contact-info">
        <p><strong>Location:</strong> {CONTACT_DATA.location}</p>
        <p><strong>Phone:</strong> {CONTACT_DATA.phone}</p>
        <p><strong>Email:</strong> {CONTACT_DATA.email}</p>
      </div>
    </section>
  );
};

