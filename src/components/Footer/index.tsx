import { GrInstagram,  GrLinkedin, GrGithub} from 'react-icons/gr';


import './Footer.css';


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
                    <li><a href='#'>Privacy</a></li>
                    <li><a href='#'>Terms</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Devices</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer