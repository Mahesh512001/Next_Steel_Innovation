
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site.data";

function Footer() {
  /* =====================================================
     CATEGORIES
  ====================================================== */

  const categories = [
    {
      name: "Kitchen Spice Rack",
      slug: "kitchen-spice-rack",
    },
    {
      name: "Kitchen Trolley",
      slug: "kitchen-trolley",
    },
    {
      name: "Rack And Shelves",
      slug: "rack-and-shelves",
    },
    {
      name: "Photo Display Stand",
      slug: "photo-display-stand",
    },
    {
      name: "Brush Holder",
      slug: "brush-holder",
    },
    {
      name: "Shoe Rack",
      slug: "shoe-rack",
    },
    {
      name: "Door Hanger",
      slug: "door-hanger",
    },
    {
      name: "Fruit Basket",
      slug: "fruit-basket",
    },
    {
      name: "Pan Stand",
      slug: "pan-stand",
    },
    {
      name: "Dish Rack",
      slug: "dish-rack",
    },
  ];

  /* =====================================================
     QUICK LINKS
  ====================================================== */

  const quickLinks = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "User Guide",
      path: "/user-guide",
    },
  ];

  /* =====================================================
     CUSTOMER SERVICE
  ====================================================== */

  const customerService = [
    {
      name: "Terms and Conditions",
      path: "/terms-and-conditions",
    },
    {
      name: "Warranty Registration",
      path: "/warranty-registration",
    },
  ];

  return (
    <footer className="footer">
      <div className="container-fluid footer-container">

        {/* =================================================
            MAIN FOOTER
        ================================================== */}

        <div className="row g-5">

          {/* =================================================
              BRAND & CONTACT
          ================================================== */}

          <div className="col-12 col-sm-6 col-lg-3">

            {/* Logo */}

            <Link
              to="/"
              className="d-inline-block text-decoration-none"
              aria-label="Next Steel Innovation Home"
            >
              <img
                src={siteConfig.logo}
                alt="Next Steel Innovation"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              Trusted for quality steel products and innovative
              solutions — crafted for durability, performance
              and reliability.
            </p>

            {/* Contact */}

            <div className="footer-contact">

              {/* Phone */}

              <div className="d-flex align-items-center footer-contact-item">

                <div className="footer-contact-icon">
                  <i className="bi bi-telephone" />
                </div>

                <div>
                  <p className="footer-contact-label">
                    CALL US
                  </p>

                  <p className="footer-contact-value">
                    +91 884 054 6629
                  </p>
                </div>

              </div>

              {/* Email */}

              <div className="d-flex align-items-center footer-contact-item">

                <div className="footer-contact-icon">
                  <i className="bi bi-envelope" />
                </div>

                <div>
                  <p className="footer-contact-label">
                    EMAIL
                  </p>

                  <p className="footer-contact-value">
                    cs@nextsteelinnovation.com
                  </p>
                </div>

              </div>

              {/* Hours */}

              <div className="d-flex align-items-center footer-contact-item">

                <div className="footer-contact-icon">
                  <i className="bi bi-clock" />
                </div>

                <div>
                  <p className="footer-contact-label">
                    SUPPORT HOURS
                  </p>

                  <p className="footer-contact-value">
                    Mon – Sat, 9:30 AM – 6:30 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Badges */}

            <div className="d-flex flex-wrap footer-badges">

              <div className="footer-badge">
                <i className="bi bi-shield-check" />
                Secure Checkout
              </div>

              <div className="footer-badge">
                <i className="bi bi-truck" />
                Pan India Delivery
              </div>

            </div>

          </div>


          {/* =================================================
              CATEGORIES
          ================================================== */}

          <div className="col-12 col-sm-6 col-lg-3">

            <h3 className="footer-heading">
              <span>CATEGORIES</span>
            </h3>

            <ul className="list-unstyled footer-links">

              {categories.map((category) => (

                <li key={category.slug}>

                  <Link
                    to={`/category/${category.slug}`}
                    className="footer-link"
                  >
                    <i className="bi bi-chevron-right" />

                    {category.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div className="col-12 col-sm-6 col-lg-3">

            <h3 className="footer-heading">
              <span>QUICK LINKS</span>
            </h3>

            <ul className="list-unstyled footer-links">

              {quickLinks.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="footer-link"
                  >
                    <i className="bi bi-chevron-right" />

                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              CUSTOMER SERVICE
          ================================================== */}

          <div className="col-12 col-sm-6 col-lg-3">

            <h3 className="footer-heading">
              <span>CUSTOMER SERVICE</span>
            </h3>

            <ul className="list-unstyled footer-links">

              {customerService.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="footer-link"
                  >
                    <i className="bi bi-chevron-right" />

                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>


            {/* =================================================
                NEWSLETTER
            ================================================== */}

            <div className="footer-newsletter">

              <h3 className="footer-subheading">
                EMAIL SUBSCRIPTION
              </h3>

              <p className="footer-newsletter-text">
                Get exclusive updates, new products and
                industry news delivered to your inbox.
              </p>


              {/* =================================================
                  SOCIAL MEDIA
              ================================================== */}

              <div className="d-flex footer-social">

                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="footer-social-btn footer-facebook"
                >
                  <i className="bi bi-facebook" />
                </a>


                {/* Instagram */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="footer-social-btn footer-instagram"
                >
                  <i className="bi bi-instagram" />
                </a>


                {/* YouTube */}

                <a
                  href="#"
                  aria-label="YouTube"
                  className="footer-social-btn footer-youtube"
                >
                  <i className="bi bi-youtube" />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM SECTION
        ================================================== */}

        <div className="footer-bottom">

          <div className="row align-items-center gy-4">

            {/* Copyright */}

            <div className="col-12 col-md-8">

              <p className="footer-copyright">
                Copyright © 2026, Next Steel Innovation.
                All rights reserved.
              </p>

            </div>


            {/* Payment Methods */}

            <div className="col-12 col-md-4">

              <div className="d-flex justify-content-md-end footer-payments">

                <div className="footer-payment">
                  <i className="bi bi-credit-card" />
                </div>

                <div className="footer-payment">
                  <span>VISA</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          WHATSAPP
      ================================================== */}

      <a
        href="https://wa.me/8840546629"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="footer-whatsapp"
      >
        <i className="bi bi-whatsapp" />
      </a>


      {/* =================================================
          CUSTOM CSS
      ================================================== */}

      <style>{`

        /* =================================
           FOOTER
        ================================= */

        .footer {
          position: relative;
          background-color: #0f172a;
          color: #ffffff;
        }

        .footer-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem;
        }


        /* =================================
           LOGO
        ================================= */

        .footer-logo {
          width: 190px;
          height: auto;
          object-fit: contain;
        }


        /* =================================
           DESCRIPTION
        ================================= */

        .footer-description {
          max-width: 390px;
          margin-top: 1.75rem;
          margin-bottom: 0;

          color: #67d2da;
          font-size: 15px;
          line-height: 1.9;
        }


        /* =================================
           CONTACT
        ================================= */

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .footer-contact-item {
          gap: 1rem;
        }

        .footer-contact-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #087f89;
          border-radius: 50%;

          color: #3bc0ca;
          font-size: 18px;

          transition: all 0.2s ease;
        }

        .footer-contact-icon:hover {
          border-color: #c1121f;
          background-color: #c1121f;
          color: #ffffff;
        }

        .footer-contact-label {
          margin: 0;

          color: #3bc0ca;
          font-size: 13px;
          font-weight: 500;

          letter-spacing: 2px;
        }

        .footer-contact-value {
          margin: 4px 0 0;

          color: #f8fafc;
          font-size: 15px;
        }


        /* =================================
           BADGES
        ================================= */

        .footer-badges {
          gap: 0.75rem;
          margin-top: 1.75rem;
        }

        .footer-badge {
          height: 40px;

          display: flex;
          align-items: center;

          gap: 0.5rem;

          padding: 0 0.75rem;

          border: 1px solid rgba(8, 127, 137, 0.5);
          background-color: rgba(30, 41, 59, 0.4);

          color: #67d2da;
          font-size: 12px;
        }

        .footer-badge i {
          color: #3bc0ca;
        }


        /* =================================
           HEADINGS
        ================================= */

        .footer-heading {
          margin: 0 0 1.75rem;

          color: #f8fafc;

          font-size: 18px;
          font-weight: 600;

          letter-spacing: 3px;
        }

        .footer-heading span {
          color: #c1121f;
        }


        /* =================================
           LINKS
        ================================= */

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-link {
          display: flex;
          align-items: center;

          gap: 0.5rem;

          color: #f1f5f9;
          text-decoration: none;

          font-size: 16px;

          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .footer-link i {
          color: #c1121f;
          font-size: 11px;

          transition: transform 0.2s ease;
        }

        .footer-link:hover {
          color: #e85b65;
        }

        .footer-link:hover i {
          transform: translateX(4px);
        }


        /* =================================
           NEWSLETTER
        ================================= */

        .footer-newsletter {
          margin-top: 2.5rem;
        }

        .footer-subheading {
          margin-bottom: 1.25rem;

          color: #c1121f;

          font-size: 18px;
          font-weight: 600;

          letter-spacing: 3px;
        }

        .footer-newsletter-text {
          margin-bottom: 0;

          color: #67d2da;

          font-size: 15px;
          line-height: 1.6;
        }


        /* =================================
           SOCIAL
        ================================= */

        .footer-social {
          gap: 0.75rem;
          margin-top: 1.75rem;
        }

        .footer-social-btn {
          width: 51px;
          height: 51px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background-color: #f8fafc;
          color: #0f172a;

          text-decoration: none;

          font-size: 20px;

          transition: all 0.2s ease;
        }

        .footer-social-btn:hover {
          transform: translateY(-4px);
          color: #ffffff;
        }

        .footer-facebook:hover {
          background-color: #0795a3;
        }

        .footer-instagram:hover {
          background-color: #c1121f;
        }

        .footer-youtube:hover {
          background-color: #c1121f;
        }


        /* =================================
           BOTTOM
        ================================= */

        .footer-bottom {
          margin-top: 4rem;
          padding-top: 1.75rem;

          border-top: 1px solid rgba(8, 127, 137, 0.3);
        }

        .footer-copyright {
          margin: 0;

          color: #67d2da;
          font-size: 15px;
        }


        /* =================================
           PAYMENTS
        ================================= */

        .footer-payments {
          gap: 0.75rem;
        }

        .footer-payment {
          width: 50px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 4px;
          background-color: #f8fafc;

          color: #c1121f;
        }

        .footer-payment i {
          font-size: 20px;
        }

        .footer-payment span {
          color: #0f172a;
          font-weight: 700;
          font-style: italic;
        }


        /* =================================
           WHATSAPP
        ================================= */

        .footer-whatsapp {
          position: fixed;
          right: 20px;
          bottom: 20px;

          z-index: 1050;

          width: 68px;
          height: 68px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background-color: #25D366;
          color: #ffffff;

          text-decoration: none;

          font-size: 34px;

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.2);

          transition:
            transform 0.2s ease;
        }

        .footer-whatsapp:hover {
          transform: scale(1.05);
          color: #ffffff;
        }


        /* =================================
           RESPONSIVE
        ================================= */

        @media (min-width: 992px) {

          .footer-container {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
          }

        }

        @media (max-width: 575.98px) {

          .footer-container {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .footer-heading {
            margin-bottom: 1.25rem;
          }

          .footer-whatsapp {
            width: 58px;
            height: 58px;

            right: 15px;
            bottom: 15px;

            font-size: 28px;
          }

        }

      `}</style>
    </footer>
  );
}

export default Footer;
