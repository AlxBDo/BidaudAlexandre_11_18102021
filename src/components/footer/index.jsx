import { Component } from "react";

import logoFooter from '../../assets/LOGO_footer.svg'

class Footer extends Component {

    render() {
        return (
            <footer>
                <img src={logoFooter} alt="Kasa logo" />
                <div>
                    © 2020 Kasa. All rights reserved
                </div>
            </footer>
        )
    }

}

export default Footer