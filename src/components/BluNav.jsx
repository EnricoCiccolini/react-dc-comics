


export default function BluNav(link) {
    const link2 = link.array
    return (
        <>
            <div className="bg-primary relative">
                <div className="container">
                    <ul className="flex gap15 item-center tx-white px-50">
                        {/* <li className="flex item-center gap10 ">
                            <img className="w-40" src="../../buy-comics-digital-comics.png" alt="Digital comics" />
                            <span>DIGITAL COMICS</span>
                        </li>

                        <li className="flex item-center gap10">
                            <img className="w-40" src="../../buy-comics-merchandise.png" alt="merchandise" />
                            <span>DC MERCHANDISE</span>
                        </li>

                        <li className="flex item-center gap10 ">
                            <img className="w-40" src="../../buy-comics-subscriptions.png" alt="SUBSCRIPTION" />
                            <span>SUBSCRIPTION</span>
                        </li>

                        <li className="flex item-center gap10 ">
                            <img className="w-40 max-h25" src="../../buy-comics-shop-locator.png" alt="Comic shop locator" />
                            <span>COMICS SHOP LOCATOR</span>
                        </li>

                        <li className="flex item-center gap10 ">
                            <img className="w-40" src="../../buy-dc-power-visa.svg" alt="dc power visa" />

                            <span>DC POWER VISA</span>
                        </li> */}
                        {link2.map((l, i) => <li key={i} className="flex item-center gap10 " ><img className="w-40" src={l.url} alt={l.title} /> <span>{l.title}</span></li>)}
                    </ul>
                </div>

            </div>

        </>
    )
}