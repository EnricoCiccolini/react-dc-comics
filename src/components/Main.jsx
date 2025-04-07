import CardGenerator from "./CardGenerator"

import array from '../data/comics'
export default function Main() {

    const content = '-->content goes here <--'
    return (
        <>
            <main className="bg-black">
                <div className="jumbo">

                </div>

                <div className=" flex tx-white gap10 wrap center">
                    <CardGenerator array={array} />
                </div>
                <div>
                    <button className="flex btn-load">load more</button>
                </div>

            </main>
        </>)


}