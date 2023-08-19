import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <>
      <h2>Get in touch!</h2>
      <p>
        Want to work with me or have any questions? Catch me below or via
        linkedIn!
      </p>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <input
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
      <a
        href="https://www.linkedin.com/in/pui-yee-shum-236977274"
        target="_blank"
      >
        <button>LinkedIn</button>
      </a>
      <a href="https://github.com/pyholly" target="_blank">
        <button>Github</button>
      </a>
    </>
  );
};
