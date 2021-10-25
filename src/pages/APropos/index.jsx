import { Component } from "react";

import DropdownBox from "../../components/dropdownBox";
import topPictureDesktop from "../../assets/apropos_header_picture_desktop.png"
import topPictureMobile from "../../assets/apropos_header_picture_mobil.png"

class APropos extends Component {

    render(){
        let textToCreate = "Ici du texte à créer... klk dlsklsd dls klds dslm dl dsmdk ld dl kdflk fldld ld sldk dls ld fd ldsko jksdjfie kdsj dksjzei kdsj kdjsf"
        let respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        return(
            <main id="a-propos">
                <picture>
                    <source media="(max-width:600px)" srcSet={topPictureMobile} />
                    <source media="(min-width:601px)" srcSet={topPictureDesktop} />
                    <img src={topPictureDesktop} alt="" />
                </picture>
                <DropdownBox text={textToCreate} id={"Fiabilité"} state={"close"} />
                <DropdownBox text={respectText} id={"Respect"} state={"open"} />
                <DropdownBox text={textToCreate} id={"Service"} state={"close"} />
                <DropdownBox text={textToCreate} id={"Responsabilité"} state={"close"} />
            </main>
        )
    }

}

export default APropos