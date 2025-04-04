export default function Linkgenerator({ link }) {
    //const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']






    return (
        <>
            {link.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}

        </>
    )
}