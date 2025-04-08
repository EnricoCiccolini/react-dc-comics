
export default function CardGenerator({ array }) {


    return (
        <>

            {array.map(l => (
                <div className='card' key={l.id} >
                    <img className='imagecard' src={l.thumb} alt={l.series} />
                    <h2>{l.series}</h2>
                </div>)
            )}
        </>
    )
}