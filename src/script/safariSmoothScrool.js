export const safariSmoothScrool = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a:link[href^="#"]')

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault()

        const targetId = this.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          if (isSafari()) {
            smoothScrollSafari(targetElement)
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })

    function isSafari() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }

    function smoothScrollSafari(targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      let startTime = null

      function animation(currentTime) {
        if (startTime === null) {
          startTime = currentTime
        }

        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / 800, 1) // Adjust the duration (800) as needed
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (timeElapsed < 800) {
          requestAnimationFrame(animation)
        }
      }

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2
      }

      requestAnimationFrame(animation)
    }
  })
}
