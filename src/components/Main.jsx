export default function Main() {

    const content = '-->content goes here <--'
    return (
        <>
            <main>
                <div className=" bg-black">
                    <div className="container bg-black">
                        <h2 className="tx-white px-50 ">{content}</h2>
                    </div>
                </div>

                <div className="bg-primary">
                    <div className="container">
                        <ul className="flex gap15 item-center tx-white px-50">
                            <li>
                                <img className="w-40" src="../../buy-comics-digital-comics.png" alt="Digital comics" />
                                <span>DIGITAL COMICS</span>
                            </li>

                            <li>
                                <img className="w-40" src="../../buy-comics-merchandise.png" alt="merchandise" />
                                <span>DC MERCHANDISE</span>
                            </li>

                            <li>
                                <img className="w-40" src="../../buy-comics-subscriptions.png" alt="SUBSCRIPTION" />
                                <span>SUBSCRIPTION</span>
                            </li>

                            <li>
                                <img className="w-40 max-h25" src="../../buy-comics-shop-locator.png" alt="Comic shop locator" />
                                <span>COMICS SHOP LOCATOR</span>
                            </li>

                            <li>
                                <img className="w-40" src="../../buy-dc-power-visa.svg" alt="dc power visa" />

                                <span>DC POWER VISA</span>
                            </li>

                        </ul>
                    </div>

                </div>
            </main>
        </>)


}