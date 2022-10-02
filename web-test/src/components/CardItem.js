import {useNavigate} from 'react-router-dom'
export default function CardItem({el}){
    const navigate= useNavigate()
    let moveToDetail=()=>{
        navigate('/Product/')
    }
    return(
        <a onClick={moveToDetail} className='cursor-pointer'>
<div style={{width:'200px'}} className=" bg-white rounded-lg border border-gray-200 shadow-md ml-10">
        <img className="rounded-t-lg" src={el.productImage} alt=""/>
    <div className="p-5">
        <div>
        <p className="mb-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis" style={{fontSize: '10pt'}}>{el.name}</p>
        <p className=" font-bold">Rp. {el.price}</p>
        </div>
    </div>
</div>
</a>

    )
}