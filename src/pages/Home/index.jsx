import RentalList from "../../components/rentalList"

import topPictureDesktop from '../../assets/home_header_picture_desktop.svg'
import topPictureMobile from '../../assets/home_header_picture_mobil.png'

function Home(){
    return(
        <main>
            <picture>
                <source media="(max-width:600px)" srcSet={topPictureMobile} />
                <source media="(min-width:601px)" srcSet={topPictureDesktop} />
                <img src={topPictureDesktop} alt="Chez vous, partout et ailleurs" />
            </picture>
            <RentalList />
        </main>
    )
}

export default Home