import binarySystem from '../assets/images/binary-system.gif'
export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
      <div className="col-md-3 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
        </a>
        <img src={binarySystem} alt="img-binary-system" style={{ maxWidth: '40px', borderRadius: '50px' }} />
        <span className="mb-3 mb-md-0 text-muted">Binary System 2023 ©</span>
      </div>
    </footer>

  )
}