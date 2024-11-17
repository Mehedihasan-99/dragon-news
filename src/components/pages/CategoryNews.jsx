import { useLoaderData } from "react-router-dom";
import Card from "../Card";

const CategoryNews = () => {

    const { data:news } = useLoaderData();
    console.log(news)

    return (
        <div>
            <h2 className="text-gray-400 mb-2">{news.length} News Found On This Category </h2>
            <div className="space-y-4">
                {
                    news.map(singleNews => <Card key={singleNews._id} singlenews={singleNews}></Card>)
                }
            </div>
        </div>
    )
};

export default CategoryNews;

