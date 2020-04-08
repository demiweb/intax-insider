import classNames from '../classNames'

export default ({ menu }) => {
  function onClick(e) {
    const link = e.target.closest(`.${classNames.menu.menu} .nav a`)
    if (!link) return
    menu.close()
  }

  document.addEventListener('click', onClick)
}
