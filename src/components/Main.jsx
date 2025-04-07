import CardGenerator from "./CardGenerator"
export default function Main() {

    const content = '-->content goes here <--'
    return (
        <>
            <main>
                <div className=" bg-black flex tx-white gap10 wrap">
                    <CardGenerator />
                </div>
                <button>load more</button>

            </main>
        </>)


}