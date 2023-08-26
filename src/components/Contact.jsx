import { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

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
      <p>
        <MdMailOutline /> pyhshum@gmail.com
      </p>
      <p>
        <MdOutlineLocationOn /> Portsmouth (willing to relocate)
      </p>
      <a
        href="https://www.linkedin.com/in/pui-yee-shum-236977274"
        target="_blank"
      >
        <button>
          <BsLinkedin />
        </button>
      </a>
      <a href="https://github.com/pyholly" target="_blank">
        <button>
          <BsGithub />
        </button>
      </a>
    </>
  );
};
