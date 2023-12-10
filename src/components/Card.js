export default function Card({review}) {

    return (
            <div>
                <div className='img-block'>
                    <img src={review.image}/>
                </div>
                <h5 className='name'>{review.name}</h5>
                <p className='job-title'>{review.job}</p>
                <p className='left-icon'>&ldquo;</p>
                <p className='description'>{review.text}</p>
                <p className='right-icon'>&rdquo;</p>
            </div>
    )
}
