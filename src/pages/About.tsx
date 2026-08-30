
function About() {
  const categories = [
    {
      icon: "bi-grid-3x3-gap",
      title: "Kitchen Spice Racks",
      description:
        "Practical and durable spice racks designed to keep your kitchen organized and your essentials within easy reach.",
    },
    {
      icon: "bi-cart3",
      title: "Kitchen Trolleys",
      description:
        "Strong multi-tier kitchen trolleys that provide convenient storage while making better use of your kitchen space.",
    },
    {
      icon: "bi-layers",
      title: "Racks & Shelves",
      description:
        "Functional shelves and racks designed for organized storage across kitchens and other areas of your home.",
    },
    {
      icon: "bi-image",
      title: "Display Stands",
      description:
        "Simple and elegant stands that help you display photographs and other small decorative items.",
    },
    {
      icon: "bi-bag",
      title: "Shoes Racks",
      description:
        "Space-efficient shoe racks built to keep footwear neatly arranged and your entrance area organized.",
    },
    {
      icon: "bi-house-door",
      title: "Home Utility Products",
      description:
        "Useful metal products including door hangers, fruit baskets, pan stands, brush holders and dish racks.",
    },
  ];

  const values = [
    {
      icon: "bi-shield-check",
      title: "Durability",
      description:
        "We focus on sturdy metal construction and reliable finishes to create products made for everyday use.",
    },
    {
      icon: "bi-stars",
      title: "Quality Finish",
      description:
        "Our products are designed with practical finishes such as premium powder coating and nickel & chrome finishes.",
    },
    {
      icon: "bi-lightbulb",
      title: "Practical Design",
      description:
        "Every product is designed around real storage needs, helping customers make better use of available space.",
    },
    {
      icon: "bi-heart",
      title: "Customer Focus",
      description:
        "We believe useful products, dependable quality and a positive customer experience should always come together.",
    },
  ];

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero position-relative overflow-hidden">

        {/* Decorative Shapes */}
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />

        <div className="container about-container position-relative">
          <div className="about-hero-content">

            {/* Badge */}
            <div className="about-badge d-inline-flex align-items-center gap-2">
              <i className="bi bi-building text-brand-light" />
              About Next Steel Innovation
            </div>

            {/* Heading */}
            <h1 className="about-hero-title">
              Smart Steel Solutions
              <span className="d-block text-brand-light">
                for Better Organized Spaces.
              </span>
            </h1>

            {/* Description */}
            <p className="about-hero-description">
              Next Steel Innovation creates practical, durable and
              thoughtfully designed metal products for modern homes.
              From kitchen organizers to storage racks and everyday
              utility products, our goal is simple — make everyday
              spaces more organized and functional.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 mt-lg-5">

              <a
              
                className="about-btn about-btn-primary"
              >
                Explore Products
                <i className="bi bi-arrow-right" />
              </a>

              <a
               
                className="about-btn about-btn-outline"
              >
                Contact Us
                <i className="bi bi-chat-dots" />
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="about-section">
        <div className="container about-container">

          <div className="row g-5 align-items-center">

            {/* Content */}
            <div className="col-12 col-lg-6">

              <p className="section-label">
                Who We Are
              </p>

              <h2 className="section-title">
                Built around everyday storage needs.
              </h2>

              <div className="section-description">

                <p>
                  <strong className="text-dark">
                    Next Steel Innovation
                  </strong>{" "}
                  is focused on creating practical steel and metal
                  utility products that bring organization, convenience
                  and functionality into everyday spaces.
                </p>

                <p>
                  Our product range includes kitchen spice racks,
                  kitchen trolleys, corner shelves, hooks shelves,
                  shoe racks, door hangers, fruit baskets, pan stands,
                  dish racks, brush holders and display stands.
                </p>

                <p>
                  We combine useful designs with materials and finishes
                  selected for regular household use. Our range includes
                  iron products with premium powder coating as well as
                  stainless-steel products with nickel and chrome finishes.
                </p>

              </div>

            </div>


            {/* Feature Cards */}
            <div className="col-12 col-lg-6">

              <div className="feature-wrapper">
                <div className="row g-3">

                  {/* Card 1 */}
                  <div className="col-6">
                    <div className="feature-card feature-card-white">
                      <i className="bi bi-box-seam feature-icon text-brand" />

                      <h3>
                        Everyday Utility
                      </h3>

                      <p>
                        Products created to solve practical storage
                        problems.
                      </p>
                    </div>
                  </div>


                  {/* Card 2 */}
                  <div className="col-6">
                    <div className="feature-card feature-card-brand">
                      <i className="bi bi-wrench-adjustable feature-icon" />

                      <h3>
                        Metal Products
                      </h3>

                      <p>
                        Designed around strong and functional metal
                        construction.
                      </p>
                    </div>
                  </div>


                  {/* Card 3 */}
                  <div className="col-6">
                    <div className="feature-card feature-card-dark">
                      <i className="bi bi-house-check feature-icon text-cyan" />

                      <h3>
                        Home Organization
                      </h3>

                      <p>
                        Helping homes stay cleaner, simpler and better
                        organized.
                      </p>
                    </div>
                  </div>


                  {/* Card 4 */}
                  <div className="col-6">
                    <div className="feature-card feature-card-white">
                      <i className="bi bi-check2-circle feature-icon text-success" />

                      <h3>
                        Practical Quality
                      </h3>

                      <p>
                        A balance of usability, appearance and durability.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCT CATEGORIES
      ====================================================== */}

      <section className="about-section about-section-light">
        <div className="container about-container">

          {/* Heading */}
          <div className="section-heading-center">

            <p className="section-label">
              What We Offer
            </p>

            <h2 className="section-title">
              Products designed for everyday life
            </h2>

            <p className="section-description-center">
              Our product collection focuses on useful home and kitchen
              organization solutions that combine functionality with
              clean, practical designs.
            </p>

          </div>


          {/* Categories */}
          <div className="row g-4 mt-4">

            {categories.map((category) => (
              <div
                key={category.title}
                className="col-12 col-sm-6 col-lg-4"
              >
                <div className="category-card h-100">

                  <div className="category-icon">
                    <i className={`bi ${category.icon}`} />
                  </div>

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                  <div className="category-link">
                    Explore category
                    <i className="bi bi-arrow-up-right" />
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          MATERIALS
      ====================================================== */}

      <section className="about-section">
        <div className="container about-container">

          <div className="row g-5 align-items-center">

            <div className="col-12 col-lg-5">

              <p className="section-label">
                Materials & Finishes
              </p>

              <h2 className="section-title">
                Made with materials selected for everyday use.
              </h2>

              <p className="section-description mt-4">
                Our collection includes products made from iron and
                stainless steel, with finishes selected according to
                the product and its intended use.
              </p>

            </div>


            <div className="col-12 col-lg-7">

              <div className="row g-4">

                {/* Iron */}
                <div className="col-12 col-sm-6">

                  <div className="material-card">

                    <div className="d-flex align-items-center gap-3">

                      <div className="material-icon material-icon-brand">
                        <i className="bi bi-circle-square" />
                      </div>

                      <div>
                        <h3>
                          Iron Products
                        </h3>

                        <p>
                          Strong everyday construction
                        </p>
                      </div>

                    </div>

                    <p className="material-description">
                      Several of our racks, trolleys, shelves and utility
                      products use iron construction with a premium
                      powder-coated finish.
                    </p>

                  </div>

                </div>


                {/* Stainless Steel */}
                <div className="col-12 col-sm-6">

                  <div className="material-card material-card-cyan">

                    <div className="d-flex align-items-center gap-3">

                      <div className="material-icon material-icon-cyan">
                        <i className="bi bi-stars" />
                      </div>

                      <div>
                        <h3>
                          Stainless Steel
                        </h3>

                        <p>
                          Clean and refined finish
                        </p>
                      </div>

                    </div>

                    <p className="material-description">
                      Our stainless-steel range includes kitchen racks
                      and shelves with nickel and chrome finishes.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="values-section">
        <div className="container about-container">

          <div className="values-heading">

            <p className="section-label text-brand-light">
              Our Values
            </p>

            <h2 className="section-title text-white">
              What guides Next Steel Innovation
            </h2>

            <p className="values-description">
              We believe good home products should be useful,
              dependable and designed with the customer’s everyday
              needs in mind.
            </p>

          </div>


          <div className="row g-4 mt-4">

            {values.map((value) => (
              <div
                key={value.title}
                className="col-12 col-sm-6 col-lg-3"
              >

                <div className="value-card h-100">

                  <i
                    className={`bi ${value.icon} value-icon`}
                  />

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY US
      ====================================================== */}

      <section className="about-section">
        <div className="container about-container">

          <div className="row g-5">

            {/* Content */}
            <div className="col-12 col-lg-6">

              <p className="section-label">
                Why Next Steel Innovation
              </p>

              <h2 className="section-title">
                Simple products.
                <span className="d-block text-brand">
                  Practical solutions.
                </span>
              </h2>

              <p className="section-description mt-4">
                We focus on creating products that have a clear purpose.
                Whether it is organizing spices, storing shoes, keeping
                pans accessible or making better use of a corner, our
                products are designed to make everyday organization easier.
              </p>

            </div>


            {/* List */}
            <div className="col-12 col-lg-6">

              <div className="why-list">

                {[
                  "Practical designs for everyday home use",
                  "Multiple storage and organization categories",
                  "Iron products with premium powder coating",
                  "Stainless-steel products with nickel and chrome finishes",
                  "Different sizes, colors and configurations",
                  "Products available across popular online marketplaces",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="why-item"
                  >

                    <span className="why-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {item}
                    </p>

                    <i className="bi bi-check-circle-fill why-check" />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="cta-section">
        <div className="container about-container">

          <div className="cta-content">

            <div className="cta-icon">
              <i className="bi bi-arrow-right-circle" />
            </div>

            <h2>
              Discover smarter ways to organize your space.
            </h2>

            <p>
              Explore the Next Steel Innovation collection and find
              practical storage solutions designed for your kitchen
              and home.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">

              <a
              
                className="about-btn about-btn-primary"
              >
                View Products
                <i className="bi bi-arrow-right" />
              </a>

              <a
               
                className="about-btn about-btn-light"
              >
                Get in Touch
                <i className="bi bi-envelope" />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CUSTOM CSS
      ====================================================== */}

      <style>{`

        /* =========================================
           COLORS
        ========================================= */

        .about-page {
          background: #fff;
          color: #172033;
        }

        .text-brand {
          color: #c1121f !important;
        }

        .text-brand-light {
          color: #f99b9f !important;
        }

        .text-cyan {
          color: #08a9c4 !important;
        }


        /* =========================================
           COMMON CONTAINER
        ========================================= */

        .about-container {
          max-width: 1440px;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .about-section {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .about-section-light {
          background: #f7fafc;
        }


        /* =========================================
           HERO
        ========================================= */

        .about-hero {
          background: #172033;
          color: #fff;
        }

        .about-hero-content {
          max-width: 900px;
          padding-top: 6rem;
          padding-bottom: 6rem;
        }

        .hero-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(48px);
          pointer-events: none;
        }

        .hero-shape-1 {
          width: 384px;
          height: 384px;
          left: -128px;
          top: -128px;
          background: rgba(193, 18, 31, 0.20);
        }

        .hero-shape-2 {
          width: 500px;
          height: 500px;
          right: -80px;
          bottom: -160px;
          background: rgba(8, 169, 196, 0.10);
        }

        .hero-shape-3 {
          width: 128px;
          height: 128px;
          right: 20%;
          top: 40px;
          background: rgba(245, 166, 35, 0.10);
        }

        .about-badge {
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 50rem;
          background: rgba(255,255,255,0.10);
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          backdrop-filter: blur(8px);
        }

        .about-hero-title {
          margin-top: 1.5rem;
          margin-bottom: 0;
          color: #fff;
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .about-hero-description {
          max-width: 700px;
          margin-top: 1.75rem;
          margin-bottom: 0;
          color: #d1d5db;
          font-size: 18px;
          line-height: 2;
        }


        /* =========================================
           BUTTONS
        ========================================= */

        .about-btn {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;

          padding: 0.875rem 1.5rem;
          border-radius: 8px;

          font-size: 14px;
          font-weight: 600;

          text-decoration: none;

          transition: all 0.2s ease;
        }

        .about-btn-primary {
          background: #c1121f;
          color: #fff;
        }

        .about-btn-primary:hover {
          background: #a50f1a;
          color: #fff;
          transform: translateY(-1px);
        }

        .about-btn-outline {
          border: 1px solid rgba(255,255,255,0.30);
          color: #fff;
          background: transparent;
        }

        .about-btn-outline:hover {
          border-color: #f99b9f;
          background: #c1121f;
          color: #fff;
        }

        .about-btn-light {
          border: 1px solid #ffcaca;
          background: #fff;
          color: #172033;
        }

        .about-btn-light:hover {
          border-color: #c1121f;
          color: #c1121f;
        }


        /* =========================================
           SECTION HEADINGS
        ========================================= */

        .section-label {
          margin: 0 0 0.75rem;
          color: #a50f1a;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .section-title {
          margin: 0;
          color: #172033;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .section-description {
          color: #475569;
          font-size: 16px;
          line-height: 2;
        }

        .section-description p {
          margin-bottom: 1.25rem;
        }

        .section-heading-center {
          max-width: 750px;
          margin: 0 auto;
          text-align: center;
        }

        .section-description-center {
          margin: 1.25rem auto 0;
          color: #475569;
          line-height: 1.75;
        }


        /* =========================================
           FEATURE CARDS
        ========================================= */

        .feature-wrapper {
          padding: 2rem;
          border-radius: 24px;
          background: #f1f5f9;
        }

        .feature-card {
          min-height: 220px;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
        }

        .feature-card-white {
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #172033;
        }

        .feature-card-brand {
          background: #c1121f;
          color: #fff;
        }

        .feature-card-dark {
          background: #172033;
          color: #fff;
        }

        .feature-icon {
          font-size: 2rem;
        }

        .feature-card h3 {
          margin-top: 1.25rem;
          margin-bottom: 0;
          font-size: 18px;
          font-weight: 700;
        }

        .feature-card p {
          margin-top: 0.5rem;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 1.7;
        }

        .feature-card-white p {
          color: #475569;
        }

        .feature-card-brand p {
          color: #ffe8e8;
        }

        .feature-card-dark p {
          color: #d1d5db;
        }


        /* =========================================
           CATEGORY CARDS
        ========================================= */

        .category-card {
          padding: 1.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 16px;
          background: #fff;

          transition: all 0.3s ease;
        }

        .category-card:hover {
          border-color: #f99b9f;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.10);
        }

        .category-icon {
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;
          background: #fff5f5;

          color: #c1121f;
          font-size: 20px;

          transition: all 0.3s ease;
        }

        .category-card:hover .category-icon {
          background: #c1121f;
          color: #fff;
        }

        .category-card h3 {
          margin-top: 1.5rem;
          margin-bottom: 0;
          color: #172033;
          font-size: 20px;
          font-weight: 700;
        }

        .category-card p {
          margin-top: 0.75rem;
          margin-bottom: 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.9;
        }

        .category-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          margin-top: 1.25rem;

          color: #a50f1a;
          font-size: 14px;
          font-weight: 600;
        }

        .category-link i {
          transition: transform 0.2s ease;
        }

        .category-card:hover .category-link i {
          transform: translate(3px, -3px);
        }


        /* =========================================
           MATERIALS
        ========================================= */

        .material-card {
          height: 100%;
          padding: 1.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 16px;
          background: #f8fafc;

          transition: all 0.3s ease;
        }

        .material-card:hover {
          border-color: #f99b9f;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .material-card-cyan:hover {
          border-color: #08a9c4;
        }

        .material-icon {
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          color: #fff;
          font-size: 20px;
        }

        .material-icon-brand {
          background: #c1121f;
        }

        .material-icon-cyan {
          background: #08a9c4;
        }

        .material-card h3 {
          margin: 0;
          color: #172033;
          font-size: 16px;
          font-weight: 700;
        }

        .material-card h3 + p {
          margin: 0.25rem 0 0;
          color: #64748b;
          font-size: 13px;
        }

        .material-description {
          margin: 1.25rem 0 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.9;
        }


        /* =========================================
           VALUES
        ========================================= */

        .values-section {
          background: #172033;
          color: #fff;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .values-heading {
          max-width: 700px;
        }

        .values-description {
          margin-top: 1.25rem;
          margin-bottom: 0;
          color: #d1d5db;
          line-height: 1.75;
        }

        .value-card {
          padding: 1.75rem;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          background: rgba(255,255,255,0.04);

          transition: all 0.3s ease;
        }

        .value-card:hover {
          border-color: rgba(249,155,159,0.40);
          background: rgba(193,18,31,0.10);
        }

        .value-icon {
          color: #f99b9f;
          font-size: 2rem;
        }

        .value-card h3 {
          margin-top: 1.5rem;
          margin-bottom: 0;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
        }

        .value-card p {
          margin-top: 0.75rem;
          margin-bottom: 0;
          color: #9ca3af;
          font-size: 14px;
          line-height: 1.9;
        }


        /* =========================================
           WHY US
        ========================================= */

        .why-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .why-item {
          display: flex;
          align-items: center;
          gap: 1rem;

          padding: 1.25rem;

          border: 1px solid #cbd5e1;
          border-radius: 12px;

          background: #fff;

          transition: all 0.3s ease;
        }

        .why-item:hover {
          border-color: #f99b9f;
          box-shadow: 0 8px 18px rgba(0,0,0,0.06);
        }

        .why-number {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: #c1121f;
          color: #fff;

          font-size: 13px;
          font-weight: 700;
        }

        .why-item p {
          margin: 0;
          color: #172033;
          font-size: 15px;
          font-weight: 500;
        }

        .why-check {
          margin-left: auto;
          color: #198754;
        }


        /* =========================================
           CTA
        ========================================= */

        .cta-section {
          border-top: 1px solid #cbd5e1;
          background: #f1f5f9;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-icon {
          width: 56px;
          height: 56px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 auto;

          border-radius: 50%;

          background: #c1121f;
          color: #fff;

          font-size: 24px;

          box-shadow: 0 8px 20px rgba(193,18,31,0.20);
        }

        .cta-content h2 {
          margin-top: 1.75rem;
          margin-bottom: 0;

          color: #172033;

          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.25;
        }

        .cta-content p {
          max-width: 700px;
          margin: 1.25rem auto 0;

          color: #475569;

          line-height: 1.75;
        }


        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 991.98px) {

          .about-hero-title {
            font-size: 3.5rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

        }

        @media (max-width: 767.98px) {

          .about-section,
          .values-section,
          .cta-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          .about-hero-content {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .about-hero-title {
            font-size: 2.75rem;
          }

          .about-hero-description {
            font-size: 16px;
            line-height: 1.8;
          }

          .section-title {
            font-size: 2.25rem;
          }

          .feature-wrapper {
            padding: 1rem;
          }

          .feature-card {
            min-height: 200px;
            padding: 1.25rem;
          }

          .cta-content h2 {
            font-size: 2.1rem;
          }

        }

        @media (max-width: 575.98px) {

          .about-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .about-hero-title {
            font-size: 2.3rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .feature-card {
            min-height: 180px;
          }

          .feature-card h3 {
            font-size: 16px;
          }

          .feature-card p {
            font-size: 13px;
          }

          .hero-shape-1 {
            width: 250px;
            height: 250px;
          }

          .hero-shape-2 {
            width: 300px;
            height: 300px;
          }

        }

      `}</style>

    </main>
  );
}

export default About;
