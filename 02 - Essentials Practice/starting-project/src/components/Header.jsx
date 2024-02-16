import headerImg from '../../public/investment-calculator-logo.png'

const Header = () => {
    return (
        <div id='header'>
        <img src={headerImg} alt="Logo with a bag of money" />
        <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header