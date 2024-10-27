import { useEffect, useState } from 'react';

const Testimonial = () => {
    const [active, setActive] = useState(3);
    const items = [
        {
            img: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
            stars: "★★★★★",
            text: "BitBox has been a game-changer for me as a developer. The platform's ease of use, combined with its collaborative features ! The opportunity to explore and learn from other developers' work",
            name: "- Rajat Mehta",
            jobTitle: "Full Stack Developer",
            location: "Location: Bengaluru, India"
        },
        {
            img: "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?ga=GA1.1.713761379.1679213202&semt=ais_hybrid",
            stars: "★★★★",
            text: "Using BitBox has been an enriching experience. It’s the perfect platform to upload, share, and collaborate on various projects. I love how easy it is to explore other developers' work and learn from them. The community is so engaging.",
            name: "- Anjali Verma",
            jobTitle: "Frontend Developer",
            location: "Location: Mumbai, India"
        },
        {
            img: "https://img.freepik.com/free-vector/gradient-professional-sarah-smith-linkedin-personal-profile-picture_742173-13011.jpg?ga=GA1.1.713761379.1679213202&semt=ais_hybrid",
            stars: "★★★★★",
            text: "BitBox has truly enhanced the way I work. The collaboration feature is brilliant, and the ease with which I can upload and share my projects is remarkable. It’s not just about showcasing work, but about learning from the wealth of knowledge shared by the community.",
            name: "- Rohan Desai",
            jobTitle: "Backend Developer",
            location: "Location: Ahmedabad, India"
        },
        {
            img: "https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?ga=GA1.1.713761379.1679213202&semt=ais_hybrid",
            stars: "★★★★",
            text: "BitBox has been an incredible platform for networking with other developers. I’ve learned so much just by engaging with the projects shared by others. The collaboration opportunities are endless, and the learning never stops. It’s a must-have tool for any aspiring developer.",
            name: "- Sneha Iyer",
            jobTitle: "UI/UX Designer",
            location: "Location: Chennai, India"
        },
        {
            img: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
            stars: "★★★★★",
            text: "The BitBox platform has allowed me to collaborate on projects I would never have had access to otherwise. It’s an amazing hub for developers to connect, share ideas, and grow together. I’ve gained invaluable experience and can’t wait to keep learning from the community.",
            name: "- Akash Sharma",
            jobTitle: "Software Tester",
            location: "Location: Hyderabad, India"
        }
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev + 1) % items.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [items.length]);

    useEffect(() => {
        loadShow();
    }, [active]);

    const loadShow = () => {
        const itemsElement = document.querySelectorAll('.slider .item');
        itemsElement[active].style.transform = `none`;
        itemsElement[active].style.zIndex = 1;
        itemsElement[active].style.filter = 'none';
        itemsElement[active].style.opacity = 1;
        // Show after
        let stt = 0;
        for (let i = active + 1; i < itemsElement.length; i++) {
            stt++;
            itemsElement[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            itemsElement[i].style.zIndex = 0;
            itemsElement[i].style.filter = 'blur(5px)';
            itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (let i = (active - 1); i >= 0; i--) {
            stt++;
            itemsElement[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            itemsElement[i].style.zIndex = 0;
            itemsElement[i].style.filter = 'blur(5px)';
            itemsElement[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    };

    return (
        <div className='pt-10'>
            <h1 className='text-center text-5xl' data-aos="zoom-out">
                See What our client say&apos;s about us !
            </h1>

            <div className="slider" style={{ position: 'relative', marginTop: '70px', width: '100%', height: '550px', overflow: 'hidden' }}
                data-aos='zoom-in'
                data-aos-duration='1700'>
                {items.map((item, index) => (
                    <div className="item max-sm:!w-[300px] max-sm:!h-[430px] bg-blue-700 text-white" key={index} style={{
                        position: 'absolute',
                        width: '350px',
                        height: '450px',
                        textAlign: 'justify',
                        borderRadius: '12px',
                        padding: '20px',
                        transition: '0.5s',
                        left: 'calc(50% - 150px)',
                        top: '0',
                        marginBottom: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                        overflow: 'hidden', // Ensures the image does not overflow
                        color: 'white',
                    }}>
                        <img
                            src={item.img}
                            alt="User Avatar"
                            className='w-[150px] h-[150px] rounded-lg object-cover mb-[20px] cursor-pointer max-sm:h-[120px] md:mb-0'
                            style={{
                                transition: 'transform 0.3s ease, filter 0.3s ease',
                                border: '3px solid #d0e7b0' // Green border for the image
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'brightness(1.1)'; // Brightness effect on hover
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'brightness(1)'; // Reset brightness
                            }}
                        />
                        <div className="stars stars-testimonial text-[#ffd700] text-2xl mt-auto max-sm:mt-2">{item.stars}</div>
                        <p className='text-justify mb-[20px] max-sm:text-xs max-sm:mb-0 text-white text-[1rem]'>{item.text}</p>
                        <h2 className='mb-[10px] text-xl font-semibold max-sm:mb-1 max-sm:text-lg'>{item.name}</h2>
                    </div>
                ))}

                <button id="next" className=' absolute top-[40%] text-blue-700 bg-none border-none text-6xl font-mono font-bold opacity-80 transition-opacity z-10 right-[50px] max-sm:text-white max-sm:text-2xl max-sm:right-2' onClick={() => setActive(prev => (prev + 1 < items.length ? prev + 1 : prev))}>{">>"}</button>
                <button id="prev" className=' absolute top-[40%] text-blue-700 bg-none border-none text-6xl font-mono font-bold opacity-80 transition-opacity z-10 left-[50px] max-sm:text-white max-sm:text-2xl max-sm:left-2' onClick={() => setActive(prev => (prev - 1 >= 0 ? prev - 1 : prev))}> {"<<"}</button>
            </div>
        </div>
    );
};

export default Testimonial;
