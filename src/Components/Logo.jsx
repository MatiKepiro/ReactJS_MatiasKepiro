import './Logo.css'
export const Logo = (props) => {
    return (
        <img className="img_logo" src={props.direccion} alt={props.descripcion} />
    )
}