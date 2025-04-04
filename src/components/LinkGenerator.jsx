export default function Linkgenerator(link) {
    //const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']

    console.log(link)
    const link2 = link.array
    console.log(link2)

    return (
        <>
            {link2.map((l, i) => <li key={i}><a href="">{l}</a></li>)}

        </>
    )
}