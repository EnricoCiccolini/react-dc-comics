import Logo from "./logo"
import Linkgenerator from "./LinkGenerator"

export default function Header({ array }) {
    //const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']





    return (
        <>

            <header className="bg-white">
                <div className="container px-20">
                    <nav className="flex space-beet">
                        <Logo />
                        <ul className="flex item-center">
                            {/* {array.map((l, i) => <li key={i}><a href="">{l}</a></li>)} */}
                            <Linkgenerator link={array} />
                        </ul>

                    </nav>
                </div>
            </header>


        </>
    )
}