export const mobileIcon = () => {
  const headerElement = window.document.getElementsByClassName('header')[0]
  const mobileNavs = window.document.getElementsByClassName('btn-mobile-nav')
  const navs = window.document.querySelectorAll('.main-nav li')
  navs.forEach(nav =>
    nav.addEventListener('click', e => {
      headerElement.classList.remove('nav-open')
    })
  )
  for (let index = 0; index < mobileNavs.length; index++) {
    mobileNavs[index].addEventListener('click', e => {
      const currTarget = e.currentTarget
      if (currTarget.classList.contains('menu-outline')) {
        headerElement.classList.add('nav-open')
      } else {
        headerElement.classList.remove('nav-open')
      }
    })
  }
}
