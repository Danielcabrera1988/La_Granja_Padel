import binarySystem from '../assets/images/binary-system.gif'

export const Footer = () => {
  return (
    <footer className="flex justify-center p-2">
        <img src={binarySystem} alt="img-binary-system" className='pr-1 w-7' />
        <p className="text-base text-red-950 font-mono">Binary System 2023 ©</p>
    </footer>
  )
}