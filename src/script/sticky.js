export const sticky = () => {
  const sectionHeroElement = document.querySelector('.section-hero')
  const observer = new IntersectionObserver(
    (e, o) => {
      const ent = e.at(0)
      if (ent.isIntersecting) {
        document.body.classList.remove('sticky')
      } else {
        document.body.classList.add('sticky')
      }
      console.log(ent)
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-90px',
    }
  )
  observer.observe(sectionHeroElement)
}
