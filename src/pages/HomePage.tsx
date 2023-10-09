// import styles
import '../styles/HomePage.css'

// import components
import Profile from "../components/Profile"
import FrontPageInfo from '../components/FrontPageInfo'



function HomePage() {

    return (
        <div className='HomePage'>
            <div className="introductionFrontPage sectionOne">
                <Profile />
                <FrontPageInfo />
            </div>
            <div className='sectionTwo'>

            </div>
        </div>
    )
}

export default HomePage