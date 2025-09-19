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
        setTimeout(typeWriter, 100)
      } else {
        animatedTextElement.classList.remove("animated-text")
        animatedTextElement.dataset.animating = "false"
      }
    }

    setTimeout(typeWriter, 500)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!fullName || !email) {
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)

    const modalElement = document.getElementById("successModal")

    if (modalElement) {
      modalElement.style.display = "block"
      modalElement.style.opacity = "1"
      modalElement.style.visibility = "visible"
      modalElement.classList.add("show")
      modalElement.setAttribute("aria-hidden", "false")
      modalElement.setAttribute("aria-modal", "true")
      modalElement.style.zIndex = "1055"

      let backdrop = document.getElementById("modal-backdrop")
      if (!backdrop) {
        backdrop = document.createElement("div")
        backdrop.className = "modal-backdrop fade show"
        backdrop.id = "modal-backdrop"
        backdrop.style.zIndex = "1050"
        backdrop.style.opacity = "0.8"
        document.body.appendChild(backdrop)
      }

      document.body.classList.add("modal-open")
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px"
    }

    setFullName("")
    setEmail("")

    console.log("Form submitted:", { fullName, email })
  }

  const closeModal = () => {
    const modalElement = document.getElementById("successModal")
    if (modalElement) {
      modalElement.classList.remove("show")
      modalElement.style.display = "none"
      modalElement.setAttribute("aria-hidden", "true")
      modalElement.removeAttribute("aria-modal")

      const backdrop = document.getElementById("modal-backdrop")
      if (backdrop) {
        backdrop.remove()
      }

      document.body.classList.remove("modal-open")
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      animateText()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zamani Tech - Waitlist</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap" rel="stylesheet" />

        {/* Your styles inserted here */}
        <style>{/* Omitted for brevity. Use the exact styles you already have. */}</style>
      </head>

      <body>
        <div className="waitlist-container">
          <div id="waitlistForm" className="w-100 d-flex flex-column align-items-center">
            <div className="brand-section">
              <p className="brand-name">Zamani</p>
            </div>

            <div className="content-section">
              <h1 className="main-heading">
                <span id="animatedText"></span>
              </h1>
              <p className="description">
                Convert your Naira to USDC and earn daily yields with our secure platform.
              </p>
            </div>

            <form className="form-section" onSubmit={handleSubmit}>
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

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
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

          {/* ✅ Fixed onClick handler here */}
          <div
            className="modal fade"
            id="successModal"
            tabIndex={-1}
            aria-labelledby="successModalLabel"
            aria-hidden="true"
            onClick={(e) => {
              const target = e.target as HTMLElement
              if (target.id === "successModal") {
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
                  <h2 className="success-title-enhanced">You're on Our Waiting List Now!</h2>
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

        {/* Bootstrap JS Bundle */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}

export default Page
