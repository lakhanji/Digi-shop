import React from "react";
import "./Track.css";

const Track = () => {
    const tracks = [
        { id: 1, title: "Premium Tshirts", description: "Our T-Shirts are 100% made of cotton." },
        { id: 2, title: "Premium Shirts", description: "Our Shirts are 100% made of cotton." },
        { id: 3, title: "Premium Jacket", description: "Our Jacket are made of pure woolen." },
    ];

    return (
        <section>
            <div className="container mx-auto px-5 py-10 md:py-14">
                <div className="flex flex-wrap -m-4 text-center">
                    {tracks.map((track) => (
                        <div key={track.id} className="track-box p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="card">
                                <svg
                                    className="card-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <h2 className="card-title">{track.title}</h2>
                                <p className="card-description">{track.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Track;
