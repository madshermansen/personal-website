// import styles
import '../styles/HomePage.css'

// import components
import Profile from "../components/Profile"
import FrontPageInfo from '../components/FrontPageInfo'
import Skills from '../components/Skills'


function HomePage() {

    return (
        <div className='HomePage'>
            <div className="introductionFrontPage">
                <Profile />
                <FrontPageInfo />
            </div>
            <Skills />
            <div className='moreInfo'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nam, asperiores aliquid omnis quo at ut reiciendis doloremque cupiditate sapiente tempore corrupti vitae reprehenderit? Numquam quidem aspernatur dolorum ullam voluptatum!</p>
            </div>
        </div>
    )
}

export default HomePage