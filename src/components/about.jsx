import React from "react"
import Mitworks from "./../img/mitworks.png"

class About extends React.Component {
    render(){
        return(
            <div className="about" id="about">
                <div className="description">
                    <h2>Welcome to MitMovie</h2>
                    <p>MitMovie is a vibrant Indonesian Production company part of Mitworks, who develop and produce distinctive deature films, television and games. This is achieved by retaining creative independence with the backing from private investors and engaging the best talents.</p>
                    <p>In a business that can be difficult for non-experts to navogate, we mitigate risk and optimise fully HMRC-compliant investmen mechanism, by making the best possible product, ensuring those who invest in our success get to share in the rewards</p>
                </div>
                <div className="description-picture">
                    <img src={Mitworks} alt="logo-company" />
                </div>
            </div>
        )
    }
}

export default About