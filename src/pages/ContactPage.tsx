import { FaLocationArrow, FaMailBulk} from 'react-icons/fa';
import GithubIconHyperlink from '../components/socials/GithubIconHyperlink';
import LinkedinIconHyperlink from '../components/socials/LinkedinIconHyperlink';

function ContactPage() {
    return (
        <div>
            <GithubIconHyperlink /><p>madshermansen</p>
            <LinkedinIconHyperlink /><p>madshermansen</p>
            <a><FaMailBulk /></a><p>madshermansen</p>
            <a><FaLocationArrow /></a><p>madshermansen</p>
        </div>
    )
}

export default ContactPage