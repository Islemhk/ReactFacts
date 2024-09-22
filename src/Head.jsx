import reactLogo from './assets/react.svg'
import './App.css'

export default function nav(){
    return (
        <nav className='nav'>
            <img src={reactLogo} alt="Reactlogo" className='logo'/>
            <h1 className='nav--logo-text'>ReactFacts</h1>
            <h2 className='nav--title'> React Course - Project1</h2> 
        </nav>
    )
}