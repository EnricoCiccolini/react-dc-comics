export default function Linkgenerator(link) {
    //const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']


    const link2 = link.array



    return (
        <>
            {link2.map((l, i) => <li key={i}><a href="">{l}</a></li>)}

        </>
    )
}