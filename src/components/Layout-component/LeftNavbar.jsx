import { useEffect, useState } from "react";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('../../../public/demo-data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div>
            <h2 className="font-semibold text-xl">All Category({categories.length})</h2>
            <div className="flex flex-col gap-3 mt-4">
                {
                    categories.map(category => <button className="btn " key={category.id}>{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;