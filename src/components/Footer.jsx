export default function Footer() {
    return (
        <>
            <footer className="relative tx-white">

                <div className="bg-heros">
                    <div className="container">
                        <div className="flex">
                            <div>

                                <ul>
                                    <li><h3>DC COMICS</h3></li>
                                    <li className="opacity5">Characters</li>
                                    <li className="opacity5">Comics</li>
                                    <li className="opacity5">Movies</li>
                                    <li className="opacity5">Tv</li>
                                    <li className="opacity5">Gasmes</li>
                                    <li className="opacity5">Video</li>
                                    <li className="opacity5">News</li>
                                </ul>

                                <ul>
                                    <li><h3>SHOP</h3></li>
                                    <li className="opacity5" >Shop DC</li>
                                    <li className="opacity5">Shop Dc Collectibles</li>
                                </ul>
                            </div>
                            <div>

                                <ul>
                                    <li><h3>DC</h3></li>
                                    <li className="opacity5">Term Of Use</li>
                                    <li className="opacity5">Privacy policy(New)</li>
                                    <li className="opacity5">Ad Choices</li>
                                    <li className="opacity5">Advertising</li>
                                    <li className="opacity5">Jobs</li>
                                    <li className="opacity5">Subscriptions</li>
                                    <li className="opacity5">Talent Workshops</li>
                                    <li className="opacity5">CPSC certificates</li>
                                    <li className="opacity5">Ratings</li>
                                    <li className="opacity5">Shop Help</li>
                                    <li className="opacity5">Contact Us</li>
                                </ul>
                            </div>

                            <div>

                                <ul>
                                    <li><h3>SITES</h3></li>
                                    <li className="opacity5">DC</li>
                                    <li className="opacity5">MAD Magazine</li>
                                    <li className="opacity5">DC Kids</li>
                                    <li className="opacity5">DC Universe</li>
                                    <li className="opacity5">Dc Power Vista</li>
                                </ul>
                            </div>

                            <img className="position-image" src="public\dc-logo-bg.png" alt="" />
                        </div>
                    </div>

                </div>

                <div className="bg-grey relative">
                    <div className="container">
                        <div className="flex space-beet item-center ">
                            <button className="ft-button">SIGN UP NOW</button>
                            <div className="flex item-center gap10 px-20 ">
                                <h3 className="tx-primary">FOLLOW US</h3>
                                <img src="public\footer-facebook.png" alt="facebook" />
                                <img src="public\footer-twitter.png" alt="twitter" />
                                <img src="public\footer-youtube.png" alt="youtube" />
                                <img src="public\footer-periscope.png" alt="pewriscope" />
                                <img src="public\footer-pinterest.png" alt="pinterest" />
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}