import React from 'react';
import Myfoto from '../images/me.png';

import Github from '../images/logo/github.svg';
import Instagram from '../images/logo/instagram.svg';
import Linkedin from '../images/logo/linkedin.svg';
import Telegram from '../images/logo/telegram.svg';
import Twitter from '../images/logo/twitter.svg';
import Whatsapp from '../images/logo/whatsapp.svg';

import GithubGray from '../images/logo/github-gray.svg';
import InstagramGray from '../images/logo/instagram-gray.svg';
import LinkedinGray from '../images/logo/linkedin-gray.svg';
import TelegramGray from '../images/logo/telegram-gray.svg';
import TwitterGray from '../images/logo/twitter-gray.svg';
import WhatsappGray from '../images/logo/whatsapp-gray.svg';

const Home = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between">
                <div className="text-gray-700 space-y-4">
                    <h1 className="font-hind font-bold text-4xl">
                        Welcome to my personal site
                    </h1>
                    <div className="flex items-baseline">
                        <h1 className="font-hind font-bold text-4xl">
                            Hi, my name is&nbsp;
                        </h1>
                        <h1 className="font-poppins text-indigo-600 text-5xl underline">
                            Edi&nbsp;
                        </h1>
                        <h1 className="font-poppins text-blue-light text-5xl underline">
                            Kurniawan
                        </h1>
                    </div>
                    <div className="flex items-baseline">
                        <h1 className="font-hind font-bold text-4xl">
                            I'm a&nbsp;
                        </h1>
                        <h1 className="font-poppins text-indigo-600 text-5xl underline">
                            Web&nbsp;
                        </h1>
                        <h1 className="font-poppins text-blue-light text-5xl underline">
                            Developer
                        </h1>
                    </div>
                    <div className="flex items-center space-x-6 font-hind font-semibold text-lg pt-10">
                        <a
                            href="https://github.com/edikurniawan-dev"
                            className="text-blue-light py-3 px-12 rounded-full border-2 border-blue-light hover:bg-blue-light hover:text-white">
                            <i className="fas fa-file-download"></i>
                            &nbsp;&nbsp; Resume
                        </a>
                        <a
                            href="https://github.com/edikurniawan-dev"
                            className="text-blue-light py-3 px-12 rounded-full border-2 border-blue-light hover:bg-blue-light hover:text-white">
                            <i className="fas fa-file-download"></i>
                            &nbsp;&nbsp; Portfolio
                        </a>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-end">
                        <img src={Myfoto} className="h-auto" alt="" />
                    </div>
                </div>
            </div>
            <div className="py-12 px-16 rounded-full shadow-2xl">
                <div className="flex items-center space-x-20 h-7">
                    <a
                        href="https://github.com/edikurniawan-dev"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src={GithubGray}
                            alt=""
                            className=""
                            onMouseOver={(e) => (e.currentTarget.src = Github)}
                            onMouseLeave={(e) =>
                                (e.currentTarget.src = GithubGray)
                            }
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/edikurniawan-dev/"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src={LinkedinGray}
                            alt=""
                            className=""
                            onMouseOver={(e) =>
                                (e.currentTarget.src = Linkedin)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.src = LinkedinGray)
                            }
                        />
                    </a>

                    <a
                        href="https://twitter.com/edikurnia_dev"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src={TwitterGray}
                            alt=""
                            className=""
                            onMouseOver={(e) => (e.currentTarget.src = Twitter)}
                            onMouseLeave={(e) =>
                                (e.currentTarget.src = TwitterGray)
                            }
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/edi.kurniawan27/"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src={InstagramGray}
                            alt=""
                            className=""
                            onMouseOver={(e) =>
                                (e.currentTarget.src = Instagram)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.src = InstagramGray)
                            }
                        />
                    </a>

                    <a
                        href="https://t.me/edikurniawan_dev"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src={TelegramGray}
                            alt=""
                            className=""
                            onMouseOver={(e) =>
                                (e.currentTarget.src = Telegram)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.src = TelegramGray)
                            }
                        />
                    </a>

                    <a
                        href="https://wa.me/6281350400660"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            src={WhatsappGray}
                            alt=""
                            className=""
                            onMouseOver={(e) =>
                                (e.currentTarget.src = Whatsapp)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.src = WhatsappGray)
                            }
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
