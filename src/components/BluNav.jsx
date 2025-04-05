const bluNavArray = [
    {
        'url': '../../buy-comics-digital-comics.png',
        'title': 'DIGITAL COMICS'
    },
    {
        'url': '../../buy-comics-merchandise.png',
        'title': 'DC MERCHANDISE'
    },
    {
        'url': '../../buy-comics-subscriptions.png',
        'title': 'SUBSCRIPTION'
    },
    {
        'url': '../../buy-comics-shop-locator.png',
        'title': 'COMICS SHOP LOCATOR'
    },
    {
        'url': '../../buy-dc-power-visa.svg',
        'title': 'DC POWER VISA'
    }

]


export default function BluNav() {
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
                        {bluNavArray.map((l, i) => <li key={i} className="flex item-center gap10 " ><img className="w-40" src={l.url} alt={l.title} /> <span>{l.title}</span></li>)}
                    </ul>
                </div>

            </div>

        </>
    )
}