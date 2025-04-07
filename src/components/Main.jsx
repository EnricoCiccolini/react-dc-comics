import CardGenerator from "./CardGenerator"

import array from '../data/comics'
export default function Main() {

    const content = '-->content goes here <--'
    return (
        <>
            <main>
                <div className=" bg-black flex tx-white gap10 wrap">
                    <CardGenerator array={array} />
                </div>
                <div>
                    <button className="flex btn-load">load more</button>
                </div>
            </main>
        </>)


}