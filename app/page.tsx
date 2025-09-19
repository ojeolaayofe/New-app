"use client"

import { useState, useEffect } from "react"

const Page = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const animateText = () => {
    const text = "Earn Reward in Stable\nSpend in Naira"
    const animatedTextElement = document.getElementById("animatedText")

    if (!animatedTextElement || animatedTextElement.dataset.animating === "true") {
      return
    }

    animatedTextElement.dataset.animating = "true"
    animatedTextElement.innerHTML = ""
    animatedTextElement.classList.add("animated-text")

    let currentIndex = 0

    const typeWriter = () => {
      if (currentIndex < text.length) {
        const char = text.charAt(currentIndex)
        if (char === "\n") {
          animatedTextElement.innerHTML += "<br>"
        } else {
          animatedTextElement.innerHTML += char
        }
        currentIndex++
        setTimeout(typeWriter, 100) // 100ms delay between each character
      } else {
        animatedTextElement.classList.remove("animated-text")
        animatedTextElement.dataset.animating = "false"
      }
    }

    // Start the typewriter effect after a small delay
    setTimeout(typeWriter, 500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!fullName || !email) {
      return
    }

    // Show loading state
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)

    console.log("[v0] Attempting to show modal")

    const modalElement = document.getElementById("successModal")
    console.log("[v0] Modal element found:", modalElement)

    if (modalElement) {
      // Force modal to be visible with !important styles
      modalElement.style.display = "block"
      modalElement.style.opacity = "1"
      modalElement.style.visibility = "visible"
      modalElement.classList.add("show")
      modalElement.setAttribute("aria-hidden", "false")
      modalElement.setAttribute("aria-modal", "true")
      modalElement.style.zIndex = "1055"

      console.log("[v0] Modal classes after show:", modalElement.className)
      console.log("[v0] Modal display style:", modalElement.style.display)

      // Add backdrop
      let backdrop = document.getElementById("modal-backdrop")
      if (!backdrop) {
        backdrop = document.createElement("div")
        backdrop.className = "modal-backdrop fade show"
        backdrop.id = "modal-backdrop"
        backdrop.style.zIndex = "1050"
        backdrop.style.opacity = "0.8"
        document.body.appendChild(backdrop)
      }

      // Add body class for modal
      document.body.classList.add("modal-open")
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px"

      console.log("[v0] Modal should now be visible")
    } else {
      console.log("[v0] Modal element not found!")
    }

    // Reset form
    setFullName("")
    setEmail("")

    // Here you would typically send the data to your backend
    console.log("Form submitted:", { fullName, email })
  }

  const closeModal = () => {
    console.log("[v0] Closing modal")

    const modalElement = document.getElementById("successModal")
    if (modalElement) {
      modalElement.classList.remove("show")
      modalElement.style.display = "none"
      modalElement.setAttribute("aria-hidden", "true")
      modalElement.removeAttribute("aria-modal")

      // Remove backdrop
      const backdrop = document.getElementById("modal-backdrop")
      if (backdrop) {
        backdrop.remove()
      }

      // Remove body classes and styles
      document.body.classList.remove("modal-open")
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""

      console.log("[v0] Modal closed")
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      animateText()
    }, 100)

    return () => clearTimeout(timer)
  }, []) // Empty dependency array ensures this only runs once

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zamani Tech - Waitlist</title>

        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

        {/* FontAwesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />

        <style>{`
          /* Added complete CSS styles for the waitlist page and text animation */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: #000000;
            color: #ffffff;
            min-height: 100vh;
            overflow-x: hidden;
          }

          .waitlist-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
            position: relative;
          }

          .brand-section {
            text-align: center;
            margin-bottom: 2rem;
          }

          .brand-name {
            font-size: 2.5rem;
            font-weight: 300;
            letter-spacing: 0.1em;
            margin: 0;
            color: #8B4513;
          }

          .content-section {
            text-align: center;
            margin-bottom: 3rem;
            max-width: 600px;
          }

          .main-heading {
            font-size: 3rem;
            font-weight: 300;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
          }

          /* Updated animation styles - cursor only shows while typing */
          .animated-text {
            display: inline-block;
            border-right: 2px solid #ffffff;
            animation: blink 1s infinite;
          }

          /* Blinking cursor animation for typewriter effect */
          @keyframes blink {
            0%, 50% { border-color: #ffffff; }
            51%, 100% { border-color: transparent; }
          }

          .description {
            font-size: 1.25rem;
            font-weight: 300;
            color: #cccccc;
            line-height: 1.6;
            letter-spacing: 0.01em;
          }

          .form-section {
            width: 100%;
            max-width: 400px;
            margin-bottom: 2rem;
          }

          .input-group {
            position: relative;
            margin-bottom: 1.5rem;
          }

          .input-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #666666;
            font-size: 1rem;
            z-index: 2;
          }

          .form-input {
            width: 100%;
            padding: 1rem 1rem 1rem 3rem;
            background: transparent;
            border: 1px solid #333333;
            border-radius: 8px;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 300;
            transition: all 0.3s ease;
          }

          .form-input:focus {
            outline: none;
            border-color: #8B4513;
            box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.1);
          }

          .form-input::placeholder {
            color: #666666;
            font-weight: 300;
          }

          .submit-btn {
            width: 100%;
            padding: 1rem 2rem;
            background: #ffffff;
            color: #000000;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }

          .submit-btn:hover {
            background: #f0f0f0;
            transform: translateY(-1px);
          }

          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }

          .social-section {
            display: flex;
            gap: 2rem;
            justify-content: center;
          }

          .social-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #666666;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 300;
            transition: color 0.3s ease;
          }

          .social-link:hover {
            color: #ffffff;
          }

          .success-section {
            text-align: center;
            max-width: 400px;
          }

          .success-icon {
            width: 60px;
            height: 60px;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
          }

          .success-title {
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 1rem;
            letter-spacing: -0.01em;
          }

          .success-message {
            font-size: 1.1rem;
            color: #cccccc;
            font-weight: 300;
            margin-bottom: 2rem;
            line-height: 1.5;
          }

          .hidden {
            display: none !important;
          }

          /* Enhanced modal styling with animations and better visual appeal */
          .modal.show {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          .modal-content {
            background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%) !important;
            border: 2px solid #8B4513 !important;
            border-radius: 20px !important;
            box-shadow: 0 20px 60px rgba(139, 69, 19, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(20px);
            animation: modalSlideIn 0.4s ease-out;
            overflow: hidden;
          }

          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .modal-header {
            background: rgba(139, 69, 19, 0.1);
            border-bottom: 1px solid rgba(139, 69, 19, 0.3) !important;
            padding: 1.5rem 2rem 1rem !important;
          }

          .btn-close-white {
            background: rgba(255, 255, 255, 0.1) !important;
            border-radius: 50% !important;
            width: 40px !important;
            height: 40px !important;
            opacity: 0.8 !important;
            transition: all 0.3s ease !important;
          }

          .btn-close-white:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            opacity: 1 !important;
            transform: rotate(90deg) !important;
          }

          .modal-body {
            padding: 2rem 2.5rem 3rem !important;
            background: rgba(0, 0, 0, 0.2);
          }

          .success-icon-enhanced {
            width: 80px !important;
            height: 80px !important;
            background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%) !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 auto 2rem !important;
            box-shadow: 0 10px 30px rgba(139, 69, 19, 0.4), 0 0 0 3px rgba(139, 69, 19, 0.2) !important;
            animation: successPulse 2s ease-in-out infinite !important;
          }

          @keyframes successPulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 10px 30px rgba(139, 69, 19, 0.4), 0 0 0 3px rgba(139, 69, 19, 0.2);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 15px 40px rgba(139, 69, 19, 0.6), 0 0 0 6px rgba(139, 69, 19, 0.3);
            }
          }

          .success-title-enhanced {
            font-size: 2.2rem !important;
            font-weight: 400 !important;
            margin-bottom: 1.5rem !important;
            letter-spacing: -0.02em !important;
            background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            animation: titleGlow 3s ease-in-out infinite !important;
          }

          @keyframes titleGlow {
            0%, 100% {
              filter: brightness(1);
            }
            50% {
              filter: brightness(1.2);
            }
          }

          .success-message-enhanced {
            font-size: 1.2rem !important;
            color: #b8b8b8 !important;
            font-weight: 300 !important;
            margin-bottom: 2.5rem !important;
            line-height: 1.6 !important;
            opacity: 0.9 !important;
          }

          .modal-close-btn {
            background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%) !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: 12px !important;
            padding: 1rem 2.5rem !important;
            font-size: 1.1rem !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3) !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
          }

          .modal-close-btn:hover {
            background: linear-gradient(135deg, #A0522D 0%, #8B4513 100%) !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 12px 35px rgba(139, 69, 19, 0.4) !important;
          }

          .modal-backdrop.show {
            background: rgba(0, 0, 0, 0.8) !important;
            backdrop-filter: blur(5px) !important;
          }

          /* Responsive design */
          @media (max-width: 768px) {
            .main-heading {
              font-size: 2.5rem;
            }

            .brand-name {
              font-size: 2rem;
            }

            .description {
              font-size: 1.1rem;
            }

            .waitlist-container {
              padding: 1rem;
            }

            .modal-body {
              padding: 1.5rem 2rem 2.5rem !important;
            }

            .success-title-enhanced {
              font-size: 1.8rem !important;
            }
          }

          @media (max-width: 480px) {
            .main-heading {
              font-size: 2rem;
            }

            .brand-name {
              font-size: 1.8rem;
            }

            .description {
              font-size: 1rem;
            }

            .modal-body {
              padding: 1rem 1.5rem 2rem !important;
            }

            .success-icon-enhanced {
              width: 70px !important;
              height: 70px !important;
            }

            .success-title-enhanced {
              font-size: 1.6rem !important;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="waitlist-container">
          {/* Main Waitlist Form */}
          <div id="waitlistForm" className="w-100 d-flex flex-column align-items-center">
            {/* Brand Section */}
            <div className="brand-section">
              <p className="brand-name">Zamani</p>
            </div>

            {/* Content Section */}
            <div className="content-section">
              <h1 className="main-heading">
                {/* Changed to animated text container */}
                <span id="animatedText"></span>
              </h1>
              <p className="description">Convert your Naira to USDC and earn daily yields with our secure platform.</p>
            </div>

            {/* Form Section */}
            <form className="form-section" id="waitlistFormElement" onSubmit={handleSubmit}>
              <div className="input-group">
                <i className="fas fa-user input-icon"></i>
                <input
                  type="text"
                  className="form-input"
                  id="fullName"
                  placeholder="Your Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="input-group">
                <i className="fas fa-envelope input-icon"></i>
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="submit-btn" id="submitBtn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-arrow-right me-2"></i>
                    <span id="btnText">Join Waitlist</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div
            className="modal fade"
            id="successModal"
            tabIndex="-1"
            aria-labelledby="successModalLabel"
            aria-hidden="true"
            onClick={(e) => {
              if (e.target.id === "successModal") {
                closeModal()
              }
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <div className="success-icon-enhanced">
                    <i className="fas fa-check" style={{ color: "#ffffff", fontSize: "1.8rem" }}></i>
                  </div>
                  <h2 className="success-title-enhanced">You're on Our Waiting list Now!</h2>
                  <p className="success-message-enhanced">
                    Thank you for joining! We'll notify you as soon as Zamani launches with exclusive early access.
                  </p>
                  <button type="button" className="modal-close-btn" onClick={closeModal}>
                    <i className="fas fa-sparkles me-2"></i>
                    <span>Awesome!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}

export default Page
