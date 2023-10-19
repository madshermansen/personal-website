// import styles
import '../styles/HomePage.css'

// import components
import FrontPage from '../components/Frontpage'
import Skills from '../components/Skills'


function HomePage() {
    return (
        <div className='HomePage'>
            <FrontPage />
            <Skills />
            <div className='moreInfo'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nam, asperiores aliquid omnis quo at ut reiciendis doloremque cupiditate sapiente tempore corrupti vitae reprehenderit? Numquam quidem aspernatur dolorum ullam voluptatum!</p>
            </div>
        </div>
    )
}

export default HomePage