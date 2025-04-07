
export default function CardGenerator({ array }) {


    return (
        <>
            {array.map((l, i) => (
                <div className='card' key={l.id} >
                    <div >
                        <img className='imagecard' src={l.thumb} alt={l.series} />
                    </div>
                    <h2>{l.series}</h2>
                </div>)
            )}
        </>
    )
}