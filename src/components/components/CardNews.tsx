import img_fap1 from '../../assets/images/fap1.jpg'
export const CardNews = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img_fap1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Primera Delegación de La Federación Argentina de Pádel FAP.</h5>
                <p className="card-text">Chaco respira pádel</p>
                <a href="https://www.facebook.com/photo/?fbid=266111132481733&set=a.192217469871100" className="btn btn-primary">Go somewhere</a>
                {/* en este ancord seleccionar el post del face que lleve al evento realizado */}
            </div>
        </div>
    )
}
