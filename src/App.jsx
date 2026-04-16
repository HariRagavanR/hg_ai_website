import { motion } from "framer-motion";
import { products } from "./data/products";

function App() {
  const inputStyle = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
    fontSize: "1rem"
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top left, #13213f 0%, #050816 45%, #020617 100%)",
        color: "white",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "Inter, sans-serif"
      }}
    >
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: #020617;
        }

        * {
          box-sizing: border-box;
        }

        section {
          scroll-margin-top: 110px;
        }

        nav a {
          text-decoration: none;
          color: #dbd1d1;
          font-weight: 600;
          position: relative;
          transition: 0.25s;
        }

        nav a:hover {
          color: white;
        }

        nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: #f59e0b;
          transition: 0.25s;
        }

        nav a:hover::after {
          width: 100%;
        }

        ::-webkit-scrollbar {
          width: 9px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(#3b82f6, #f59e0b);
          border-radius: 999px;
        }

        ::-webkit-scrollbar-track {
          background: #050816;
        }

        @media (max-width: 430px) {
          .navbar {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 14px 12px !important;
            gap: 12px !important;
          }

          .navbar > div:first-child {
            gap: 10px !important;
          }

          .navbar > div:first-child img {
            width: 44px !important;
            height: 44px !important;
          }

          .brand-title {
            font-size: 1.2rem !important;
            line-height: 1 !important;
          }

          .brand-subtitle {
            font-size: 0.5rem !important;
            letter-spacing: 1px !important;
            line-height: 1.2 !important;
          }

          .nav-links {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            justify-content: flex-end !important;
            align-items: center !important;
            gap: 8px !important;
            font-size: 0.72rem !important;
          }

          .hero-title {
            font-size: 3rem !important;
          }

          .hero-logo-box {
            width: 120px !important;
            height: 120px !important;
          }

          .hero-logo {
            width: 80px !important;
            height: 80px !important;
          }

          .button-group {
            flex-direction: column;
            width: 100%;
            align-items: center;
          }

          .button-group button {
            width: 100%;
            max-width: 320px;
          }

          .contact-grid {
            padding: 22px !important;
            gap: 20px !important;
          }

          .contact-grid > div {
            width: 100% !important;
            min-width: 0 !important;
          }

          .footer-links {
            flex-direction: column !important;
          }
        }
      `}</style>

      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: "14px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "92%",
          maxWidth: "1500px",
          zIndex: 1000,
          padding: "14px 28px",
          borderRadius: "22px",
          background: "rgba(4,10,24,0.82)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="/logo/hg-logo.png"
            alt="H&G AI"
            style={{ width: "64px", height: "64px", objectFit: "contain" }}
          />

          <div>
            <div className="brand-title" style={{ color:"hsl(29, 100%, 50%)" ,fontSize: "2.2rem", fontWeight: 800 }}>
              H&G AI
            </div>
              <div
              className="brand-subtitle"
              style={{
                color: "#f59e0b",
                fontSize: "0.9rem",
                letterSpacing: "3px",
                textTransform: "uppercase"
              }}
              >
              Intelligent AI Solutions
            </div>
          </div>
        </div>

        <div className="nav-links" style={{ display: "flex", gap: "36px" }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section
        id="home"
        style={{
          minHeight: "100vh",
          padding: "140px 24px 60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", textAlign: "center" }}>
          <div
            className="hero-logo-box"
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto 22px",
              borderRadius: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 0 80px rgba(245,158,11,0.18)",
              border: "1px solid rgba(255,255,255,0.06)"
            }}
          >
            <img
              className="hero-logo"
              src="/logo/hg-logo.png"
              alt="H&G AI"
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
          </div>

          <p style={{ color: "#60a5fa", letterSpacing: "5px", textTransform: "uppercase" }}>
            Future Of AI Products
          </p>

          <h1
            className="hero-title"
            style={{
              fontSize: "5.6rem",
              lineHeight: 1.05,
              margin: "10px auto 24px",
              maxWidth: "1000px"
            }}
          >
            Building Premium
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              AI Products
            </span>
            <br />
            For Real Problems
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 34px",
              color: "#9ca3af",
              lineHeight: 1.9,
              fontSize: "1.05rem"
            }}
          >
            H&G AI builds intelligent products like Medical Report Explain AI,
            WhatsApp Chat AI and Resume & Career Builder AI to solve real-world
            problems with modern AI.
          </p>

          <div className="button-group" style={{ display: "flex", justifyContent: "center", gap: "18px", marginBottom: "70px" }}>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                border: "none",
                background: "linear-gradient(90deg,#2563eb,#8b5cf6)",
                color: "white",
                padding: "16px 30px",
                borderRadius: "14px",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              Explore Products
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                padding: "16px 30px",
                borderRadius: "14px",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              Contact H&G AI
            </button>
          </div>

          <div
            id="services"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "24px"
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "30px",
                  textAlign: "left"
                }}
              >
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: product.color, marginBottom: 16 }} />
                <h3>{product.title}</h3>
                <p style={{ color: "#9ca3af", lineHeight: 1.8 }}>{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px 100px"
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "26px",
            padding: "50px",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <h2 style={{ fontSize: "2.6rem", marginBottom: "28px" }}>
            About H&G AI
          </h2>

          <p
            style={{
              color: "#9ca3af",
              lineHeight: 2,
              fontSize: "1.05rem",
              textAlign: "justify",
              textJustify: "inter-word"
            }}
          >
            H&G AI is a next-generation artificial intelligence startup focused on
            creating practical, premium and intelligent products that solve real-world
            problems. Our vision is simple: to make AI useful, understandable and
            accessible for everyone. We believe that artificial intelligence should
            not feel complicated or limited to only large companies or technical
            experts. Instead, it should become a powerful tool that helps students,
            professionals, businesses and everyday people save time, make better
            decisions and improve their lives.
            <br />
            <br />
            At H&G AI, we are building products that are based on real human needs.
            Every product we design begins with a problem that people face in their
            daily life. We then use modern AI technologies such as machine learning,
            natural language processing and automation to create a solution that is
            simple, fast and easy to use. Our current products include Medical Report
            Explain AI, which helps people understand difficult medical reports in
            simple language; WhatsApp Chat AI, which helps businesses automate replies
            and improve communication; and Resume & Career Builder AI, which supports
            students and job seekers by creating stronger resumes, improving LinkedIn
            profiles and providing a clear career roadmap.
            <br />
            <br />
            What makes H&G AI different is our strong focus on both technology and
            user experience. We do not want to create products that only look powerful
            on the inside. We want every product to feel smooth, premium and
            trustworthy from the moment a user opens it. That is why we spend time
            designing clean interfaces, modern layouts, fast performance and simple
            workflows. We believe that good design builds confidence and helps people
            trust the technology they are using.
            <br />
            <br />
            Our mission is not limited to just a few products. H&G AI is building
            towards a larger ecosystem of intelligent tools that can transform how
            people work, learn, communicate and solve problems. In the future, we plan
            to expand into more areas such as healthcare AI, education technology,
            AI-powered business tools, career development platforms and productivity
            systems. We want H&G AI to become a brand that people recognise for
            innovation, reliability and practical value.
            <br />
            <br />
            As we continue to grow, our commitment remains the same: build AI products
            that are useful, beautiful and created with purpose. We want every product
            from H&G AI to solve a genuine problem and create a meaningful impact. Our
            goal is not only to build a successful startup, but to create a future
            where intelligent technology works hand in hand with people and makes life
            better for everyone.
          </p>
        </div>
      </section>

      <section
          id="contact"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 16px 100px"
          }}
        >
          <div
            className="contact-grid"
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              background: "rgba(255,255,255,0.03)",
              borderRadius: "26px",
              padding: "clamp(22px, 5vw, 50px)",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                flex: "1 1 300px",
                minWidth: 0
              }}
            >
              <h2 style={{ fontSize: "2.5rem" }}>Contact Us</h2>

              <p style={{ color: "#9ca3af", lineHeight: 2 }}>
                Have an idea or want to collaborate with H&G AI? Reach out and we’ll
                get back to you.
              </p>
            </div>

            <div
              style={{
                flex: "1 1 300px",
                minWidth: 0,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Email Address" style={inputStyle} />
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
              <textarea
                rows="5"
                placeholder="Your Message"
                style={{ ...inputStyle, resize: "none" }}
              />

              <button
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "none",
                  borderRadius: "14px",
                  background: "linear-gradient(90deg,#2563eb,#8b5cf6)",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "50px 24px 40px", background: "rgba(255,255,255,0.02)", marginTop: "40px" }} > <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }} > {/* Left */} <div style={{ flex: 1, minWidth: "280px" }}> <h2 style={{ fontSize: "2rem", marginBottom: "12px", color: "hsl(29, 100%, 50%)" }} > H&G AI </h2> <p style={{ color: "#9ca3af", lineHeight: "1.9", maxWidth: "420px" }} > Building intelligent AI solutions for real-world problems. We create premium AI products that help people work smarter, communicate better and grow faster. </p> </div> {/* Right */} <div style={{ minWidth: "280px" }}> <h3 style={{ color: "#fff", marginBottom: "18px", fontSize: "1.2rem" }} > Contact Information </h3> <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#d1d5db" }} > <p style={{ margin: 0 }}> hello.hg.ai@gmail.com
 </p> <p style={{ margin: 0 }}> +91 8825967193 </p> <p style={{ margin: 0, color: "#6b7280" }}> LinkedIn: https://www.linkedin.com/company/hg-ai/ </p> <p style={{ margin: 0, color: "#6b7280" }}> Instagram: https://www.instagram.com/_hg.ai_/ </p> </div> </div> </div> <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "35px", paddingTop: "22px", textAlign: "center", color: "#6b7280", fontSize: "0.9rem" }} > © 2026 H&G AI. All rights reserved. </div> </footer>
    </div>
  );
}

export default App;
