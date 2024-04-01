import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const iconStyles = "h-5 w-5 text-black hover:text-indigo-200";

  return (
    <footer
      id="footer"
      className="min-w-full border-t-2 border-indigo-900 bg-indigo-400 text-sm text-black"
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-3 px-4 py-3 text-center sm:flex-row sm:gap-20 md:px-16">
        <p>
          &lt;/&gt; Coded by&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://annasfaruqui.netlify.app"
            className="font-semibold hover:text-indigo-200"
          >
            Mohammed Annas Faruqui
          </a>
        </p>
        <div className="flex items-center justify-center gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/annasfaruqui"
          >
            <FaLinkedin className={iconStyles} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/annasfaruqui"
          >
            <FaGithub className={iconStyles} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:annasfaruqui123@gmail.com"
          >
            <FaEnvelope className={iconStyles} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
