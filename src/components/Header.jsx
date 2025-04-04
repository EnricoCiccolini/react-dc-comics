import Logo from "./logo"
import Linkgenerator from "./LinkGenerator"

export default function Header(link) {
    //const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']


    const link2 = link.array


    return (
        <>

            <header className="bg-white">
                <div className="container px-20">
                    <nav className="flex space-beet">
                        <Logo />
                        <ul className="flex item-center">
                            {/* {link2.map((l, i) => <li key={i}><a href="">{l}</a></li>)} */}
                            {Linkgenerator(link)}
                        </ul>

                    </nav>
                </div>
            </header>


        </>
    )
}