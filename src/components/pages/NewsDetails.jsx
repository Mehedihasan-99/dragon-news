import React from 'react';
import RightNavbar from '../Layout-component/RightNavbar';
import Header from '../Header';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const {data} = useLoaderData();
    const news = data[0];

    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-8'>
                <section className='col-span-9 '>
                    <h2 className="font-semibold text-xl mb-2">Dragon News</h2>
                    <div className='border rounded-xl p-5 space-y-4'>
                        <img src={news?.thumbnail_url} alt="" className='w-full max-h-[410px] '/>
                        <h2 className='font-bold text-2xl'>{news?.title}</h2>
                        <p className='mb-5'>{news?.details}d</p>
                        <button className='bg-blue-200 p-2 rounded-lg '><Link to={`/category/${news?.category_id}`}>All news in this category</Link></button>
                    </div>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;