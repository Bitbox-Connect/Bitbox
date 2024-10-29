import '../../css/Main.css';
import PropTypes from 'prop-types';


const codeOfConductItems = [
    {
        id: 1,
        title: "Respect and Courtesy",
        content:
            "Respect the opinions of others and refrain from using offensive language. Treat fellow participants with courtesy and respect, regardless of their background.",
    },
    {
        id: 2,
        title: "Punctuality",
        content:
            "Punctuality is key. Ensure you are present on time for all scheduled activities. Late arrivals may result in missed opportunities and important announcements.",
    },
    {
        id: 3,
        title: "Guideline Adherence",
        content:
            "Follow the guidelines for participation strictly. Any misconduct or deviation from the rules may lead to disqualification from the event or program.",
    },
    {
        id: 4,
        title: "Positive Attitude",
        content:
            "Maintain a constructive and positive attitude throughout the program. We encourage participants to collaborate and learn from each other.",
    },
    {
        id: 5,
        title: "Confidentiality",
        content:
            "Do not share sensitive or confidential information of the program without proper authorization. Be mindful of the security and privacy of data.",
    },

];


const CodeOfConduct = (props) => {
    return (
        <div className={`min-h-screen mt-16 py-10 ${props.mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                {/* Main Section Heading */}
                <h1 className={`text-center text-4xl font-bold mb-6 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Program Code of Conduct
                </h1>
                {/* Subtitle */}
                <h2 className={`text-center text-2xl font-semibold mb-8 ${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Please adhere to the following guidelines for a smooth and productive event
                </h2>

                {/* Flex container for the blocks */}
                <div className="flex flex-wrap -mx-4">
                    {codeOfConductItems.map((item) => (
                        <div key={item.id} className={`w-full md:w-1/2 px-4 mb-8 ${item.id === 5 ? 'w-full' : 'w-1/2'}`}>
                            <div
                                className={`relative rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 cursor-pointer
                    ${props.mode === 'dark' ? 'bg-gray-800 hover:bg-gray-700 hover:shadow-2xl' : 'bg-white hover:bg-gray-50 hover:shadow-2xl'}`}
                            >
                                {/* Item Heading */}
                                <h3 className={`text-xl font-semibold mb-2 ${props.mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {item.title}
                                </h3>
                                {/* Item Content */}
                                <p
                                    className={`text-lg leading-relaxed ${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                        }`}
                                >
                                    {item.content}
                                </p>
                                {/* Badge */}
                                <span
                                    className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center border-2 shadow-md ${props.mode === 'dark' ? 'bg-blue-500 text-white border-gray-800' : 'bg-blue-600 text-white border-white'
                                        }`}
                                >
                                    {item.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

CodeOfConduct.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
};

export default CodeOfConduct
