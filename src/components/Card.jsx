import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ singlenews }) => {

    const { author, image_url, details, rating, total_view, _id } = singlenews;

    return (
        <div className='border rounded-lg'>
            <div className='bg-base-300 rounded-t-md px-4 py-3 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <img src={author.img} alt="" className='h-10 w-10 rounded-full' />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-400">{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaShareAlt />
                </div>
            </div>
            <div className="p-5 flex flex-col gap-5">
                <h2 className="text-xl font-bold ">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                <img src={image_url} alt="" className="mb-3" />
                <p className="text-gray-400">{details.slice(0, 200)}...
                    <Link to={`/news/${_id}`}><span className="font-bold text-black">Read More</span></Link></p>
                <div className='border'></div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <span className="text-sm font-medium">{rating.number}</span>
                        <span className="text-xs text-gray-500">({rating.badge})</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span className="text-sm">{total_view || "N/A"} views</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
