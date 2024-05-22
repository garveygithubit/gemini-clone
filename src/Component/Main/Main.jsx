import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context'; // Adjust the path to where ContextProvider is located

const Main = () => {
    const { onSent,recentPrompts, showResult, loading, resultData, input, setInput } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSent(input);
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Garvey.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="Bulb Icon" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="Message Icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                    </div>
                </div>
                <div className="main-bottom">
                    <form className="search-box" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder='Enter a prompt here' 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            <button type="submit">
                                <img src={assets.send_icon} alt="Send Icon" />
                            </button>
                        </div>
                    </form>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
                {loading && <p>Loading...</p>}
                {showResult && <div className="result">
                    <p>{resultData}</p>
                </div>}
            </div>
        </div>
    );
};

export default Main;
