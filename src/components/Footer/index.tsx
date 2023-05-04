import { GrInstagram,  GrLinkedin, GrGithub} from 'react-icons/gr';


import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {

    return(
        <div className='footer'>
            <div className='footer__links'>
                <a href="https://www.instagram.com/dave_oval/" target='_blank'><GrInstagram/></a>
                <a href="https://www.linkedin.com/in/david-vazquez-developer/" target='_blank'><GrLinkedin/></a>
                <a href="https://github.com/DaveOval" target='_blank'><GrGithub/></a>
                
            </div>
            <div className='footer__credits'>
                <p>2023 Created by David Vazquez.</p>
                <p>Alura Latam.</p>
            </div>
            <div className='footer__legal'>
                <ul>
                    <li><Link to='/error'>Privacy</Link></li>
                    <li><Link to='/error'>Terms</Link></li>
                    <li><Link to='/error'>Help</Link></li>
                    <li><Link to='/error'>Devices</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer