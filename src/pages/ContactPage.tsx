import GithubIconHyperlink from '../components/socials/GithubIconHyperlink';
import LinkedinIconHyperlink from '../components/socials/LinkedinIconHyperlink';
import { AiOutlineMail } from 'react-icons/ai'

// import styles
import '../styles/ContactPage.css'

function ContactPage() {
    return (
        <div className='contactWrapper'>
            <div className='getInTouch'>
                <h1>Get in touch</h1>
                <AiOutlineMail className="mailMe"/>
                <p>mdj.hermansen@gmail.com</p>
            </div>
            <div className='madsHermansen'>
                <img alt="picture of Mads Hermansen" src="../Images/itsMe!.bmp" loading='lazy'></img>
            </div>
            <div className='socials'>
                <h1>Socials</h1>
                <div><GithubIconHyperlink /><p>madshermansen</p></div>
                <div><LinkedinIconHyperlink /><p>madshermansen</p></div>
            </div>
        </div>
    )
}

export default ContactPage