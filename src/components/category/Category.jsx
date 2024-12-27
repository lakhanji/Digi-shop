import { useNavigate } from "react-router";

// category data
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
];

const Category = () => {
    const navigate = useNavigate();
    return (
        <div className="p-5 bg-gray-100">
            <div className="flex flex-col items-center">
                {/* Horizontal Scrollable Section */}
                <div className="flex overflow-x-auto hide-scroll-bar space-x-6 w-full">
                    {category.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col items-center w-32"
                            onClick={() => navigate(`/category/${item.name}`)}
                        >
                            {/* Box for Category */}
                            <div
                                style={{
                                    width: "120px",
                                    height: "80px",
                                    backgroundColor: "navy",
                                    borderRadius: "15px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                                }}
                                className="hover:transform hover:scale-105 hover:shadow-xl"
                            >
                                <img
                                    src={item.image}
                                    alt={`${item.name}`}
                                    style={{
                                        width: "90%",
                                        height: "70%",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                            {/* Name Text */}
                            <h1 className="mt-2 text-sm md:text-md text-center font-medium text-gray-700 capitalize">
                                {item.name}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Scrollbar Styling */}
            <style dangerouslySetInnerHTML={{ __html: `
                .hide-scroll-bar {
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                    scrollbar-width: none; /* Firefox */
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Edge */
                }
            ` }} />
        </div>
    );
};

export default Category;
