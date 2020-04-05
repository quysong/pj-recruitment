// components/Header.js
import Link from "next/link";

const Footer = props => (
  <>
    {/* footer start */}
    <footer>
      <div className="container">
        <div className="col-md-3 col-sm-6">
          <h4>Featured Job</h4>
          <ul>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Premium MBA Jobs</a></li>
            <li><a href="#">Access Database</a></li>
            <li><a href="#">Manage Responses</a></li>
            <li><a href="#">Report a Problem</a></li>
            <li><a href="#">Mobile Site</a></li>
            <li><a href="#">Jobs by Skill</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Latest Job</h4>
          <ul>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Premium MBA Jobs</a></li>
            <li><a href="#">Access Database</a></li>
            <li><a href="#">Manage Responses</a></li>
            <li><a href="#">Report a Problem</a></li>
            <li><a href="#">Mobile Site</a></li>
            <li><a href="#">Jobs by Skill</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Reach Us</h4>
          <address>
            <ul>
              <li>1201, Murakeu Market, QUCH07<br />
              United Kingdon</li>
              <li>Email: Support@job.com</li>
              <li>Call: 044 123 458 65879</li>
              <li>Skype: job@skype</li>
              <li>FAX: 123 456 85</li>
            </ul>
          </address>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Drop A Mail</h4>
          <form>
            <input type="text" className="form-control input-lg" placeholder="Your Name" />
            <input type="text" className="form-control input-lg" placeholder="Email..." />
            <textarea className="form-control" placeholder="Message" defaultValue={""} />
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
      <div className="copy-right">
        <p>©Copyright 2018 Jober Desk | Design By <a href="https://themezhub.com/">ThemezHub</a></p>
      </div>
    </footer>
  </>
);

export default Footer;
