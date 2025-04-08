


export default function BluNav(link) {
    const link2 = link.array
    return (
        <>
            <div className="bg-primary relative">
                <div className="container">
                    <ul className="flex gap15 item-center tx-white px-50">

                        {link2.map((l, i) => <li key={i} className="flex item-center gap10 " ><img className="w-40" src={l.url} alt={l.title} /> <span>{l.title}</span></li>)}
                    </ul>
                </div>

            </div>

        </>
    )
}