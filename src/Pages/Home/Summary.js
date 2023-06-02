import React from 'react';
import pic1 from '../../assets/books.png';
import pic2 from '../../assets/users.png';
import pic3 from '../../assets/love.png';
import { BsFillEmojiSmileFill } from 'react-icons/bs';


const summaryItems = [
    {
        id: 1,
        title: 'Books We Have',
        subTitle: '21423231212',
        picture: pic1,
    },
    {
        id: 2,
        title: 'Total Members',
        subTitle: '89087898',
        picture: pic2,
    },
    {
        id: 3,
        title: 'Happy Users',
        subTitle: '9878686987',
        picture: "https://cdn-icons-png.flaticon.com/512/158/158420.png",
    },

]

const Summary = () => {
    return (
        
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10 max-w-[1280px] mx-auto'>
            {
                summaryItems.map(item => <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={item.id}
                    className='h-72 bg-yellow-500 flex justify-center items-center'>
                    <div>
                        <img className='h-20' src={item.picture} alt="" />
                        <h1 className='text-2xl font-semibold'>{item.title}</h1>
                        <p>{item.subTitle}</p>
                    </div>
                </div>)
            }


        </div>
        
    );
};

export default Summary;