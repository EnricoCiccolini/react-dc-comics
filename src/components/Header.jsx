import Logo from "./logo"
export default function Header() {
    const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']


    const filippo = linkNav.map((l, i) => <li key={i}><a href="">{l}</a></li>)
    console.log(filippo);

    return (
        <>

            <header>
                <div className="container px-10">
                    <nav className="flex space-beet">
                        <Logo />
                        <ul className="flex item-center">
                            {linkNav.map((l, i) => <li key={i}><a href="">{l}</a></li>)}
                        </ul>

                    </nav>
                </div>
            </header>


        </>
    )
}