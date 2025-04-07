import array from '../data/comics'
export default function CardGenerator({ link }) {


    console.log(array[0])



    return (
        <>
            {array.map((l, i) => <div className='card' key={l.id} ><div ><img className='imagecard' src={l.thumb} alt="" /></div><h2>{l.title}</h2></div>
            )}
        </>
    )
}