export const splitValue = (value: Number | string, padSize: number = 2) => `${value}`.padStart(padSize, '0').split('')

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
export const scrollToElement = (selector: string) => {
  const element: HTMLElement | null = document.querySelector(selector)
  const mg = window.matchMedia('(max-width: 639)')

  if (element && mg.matches) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
}

export const playAudio = (path: string) => new Audio(path).play()

export const sendNotification = (title: string, options: object) => new Notification(title, options)
