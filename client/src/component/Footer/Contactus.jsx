import '../css/main.css';
// import { Link } from 'react-router-dom';
// import { SiLinktree } from "react-icons/si";
// import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaReddit, FaDiscord, FaTelegram, FaFacebook } from 'react-icons/fa';

const Contactus = () => {
  return (
    <>
      <div className="container">
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <div class="text-center mb-12">
                  {/* <h1 class="Page-Heading">Contact Us</h1> */}
                  <h1 className="Heading-Page text-dark text-center font-weight-bold">Contact Us</h1>
        <header className="navbar header justify-content-center ">
          <div className="bind text-center d-flex">
            <img className="image-bx" src="https://th.bing.com/th/id/OIG4.9082tuIPKO0B2s2GNXrK?pid=ImgGn" alt="img" />
            <h2>@BitBox / Open-Source Community </h2>
          </div>
          <div className="share">
            <a href="#" className="share-btn"> <i className='bx bx-dots-horizontal-rounded' style={{ color: '#0e0d0e' }} ></i></a>
          </div>
        </header>
        <div className="cnt1">
          <div className="soft">
            <pre> <h4 className='text-center'>Software Developer | Web Developer | Content Creator </h4> </pre>
          </div>
        </div>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name" class="text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="form-control" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email" class="text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message" class="text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" class="form-control" placeholder="Enter your message" rows="4"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Contactus;
