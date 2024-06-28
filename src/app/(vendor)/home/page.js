"use client";
import Image from "next/image";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from "@/app/components/Menu";

const page = () => {

    return (
        <div className="container-home ">
            <div className="home">
                <div className="banner-top">
                    <div className="logo-top">
                        <Image src="/images/logo.png" width={224} height={47}/>
                    </div>
                    {/* <div ><FontAwesomeIcon icon={faBars}/></div> */}
                    {/* <div className="menu-list">
                        <a href="#" className="menu-item" >For Vendors</a>
                        <a href="#" className="menu-item">For Workers</a>
                        <a href="#" className="menu-item">Contact Us</a>
                        <a href="#" className="menu-item">Whitepaper</a>
                        <a href="#" className="menu-item">Takenomics</a>
                    </div> */}
                    <Menu activePage="vendor" />
                </div>
                <div className="banner-content">
                <div className="banner-left">
                    <h1 className="ibm-plex-mono-bold">Looking for data labeling solutions?</h1>
                    <p className="ibm-plex-mono-light">WorkEvo allows you to easily build and manage your own data labeling workflows and workforce. A turnkey data labeling service that provides an expert workforce and manages it on your behalf.</p>
                    <div className="left-btn">
                        <div className="con-btn">
                            <a href="#" className="con-us ibm-plex-mono-regular" >Contact Us </a>
                        </div>
                        <div className="watch-vids">
                            <a href="#" className="watch-vd ibm-plex-mono-regular"><i className="icon-container"><FontAwesomeIcon icon={faPlay} className="icon-play"/></i>
                            Watch Video</a>
                        </div>
                    </div>
                </div>
                <div className="banner-right">
                    <Image src="/images/ai_remove_image 2.png" alt="" width={554} height={409} />
                </div>
                </div>

               <div className="communiti-1">
                    <div className="com1-content">
                        <h1 className="ibm-plex-mono-bold">What does your business need?</h1>
                        <div className="com1-list">
                            <div className="com1-item">
                                <div className="ibm-plex-mono-semibold com1-num">100K+</div>
                                <div className="ibm-plex-mono-medium com1-title">Worker</div>
                            </div>
                            <div className="com1-item">
                                <div className="ibm-plex-mono-semibold com1-num">100%</div>
                                <div className="ibm-plex-mono-medium com1-title">Data Accuracy</div>
                            </div>
                            <div className="com1-item">
                                <div className="ibm-plex-mono-semibold com1-num">70%</div>
                                <div className="ibm-plex-mono-medium com1-title">Financial savings</div>
                            </div>
                            <div className="com1-item">
                                <div className="ibm-plex-mono-semibold com1-num">99,9%</div>
                                <div className="ibm-plex-mono-medium com1-title">Customer happiness</div>
                            </div>
                        </div>
                        <a href="#" className="com1-btn ibm-plex-mono-medium">Join Community</a>
                    </div>
               </div>
               <div className="about-container">
                    <div className="about-left">
                        <h1 className="ibm-plex-mono-bold">About WorkEvo</h1>
                        <p className="ibm-plex-mono-light">WorkEvo is a crowdsourcing marketplace that makes it easier for individuals and businesses to outsource their processes and nhiệm vụ to a distributed workforce who can perform these tasks virtually. This could include anything from conducting simple data validation and research to more subjective tasks like survey participation, content moderation, and more.</p>
                        <p className="ibm-plex-mono-light">While technology continues to improve, there are still many things that human beings can do much more effectively than computers, such as moderating content, performing data deduplication, or research. Traditionally, tasks like this have been accomplished by hiring a large temporary workforce, which is time consuming, expensive and difficult to scale, or have gone undone.</p>
                        <a href="#" className="about-btn ibm-plex-mono-regular">Whitepaper</a>
                    </div>
                    <div className="about-right">
                        <Image src="/images/about-image.png" alt="" width={1089} height={680}/>
                    </div>
               </div>
               <div className="task-container">
                    <div className="task-header">
                        <h1 className="ibm-plex-mono-bold task-title">Tasks is flexible and caters to your needs</h1>
                        <p className="ibm-plex-mono-light task-des">From data labeling to reinforcement learning from human feedback and everything in-between.</p>
                    </div>
                    <div className="task-content">
                        <div className="task-top">
                            <div className="task-item">
                                <Image src="/images/fixed-form.png" className="task-img" alt="" width={366} height={518} />
                                <div className="task-info">
                                    <h1 className="ibm-plex-mono-bold">Fixed Forms</h1>
                                    <p className="ibm-plex-mono-light">Human evaluation of Key-Value pairs extracted by Computer Vision</p>
                                </div>
                            </div>
                            <div className="task-item">
                                <Image src="/images/verify-image.png" className="task-img" alt="" width={366} height={518} />
                                <div className="task-info">
                                    <h1 className="ibm-plex-mono-bold">Verify Image</h1>
                                    <p className="ibm-plex-mono-light">Label products, get human reviews for unsafe content, such as explicit adult content or violent content</p>
                                </div>
                            </div>
                            <div className="task-item">
                                <Image src="/images/general-text.png" className="task-img" alt="" width={366} height={518} />
                                <div className="task-info">
                                    <h1 className="ibm-plex-mono-bold">General Text</h1>
                                    <p className="ibm-plex-mono-light">Confirm general documents, automatically check grammar and syntax errors. Makes text more precise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="task-bot">
                            <div className="task-item">
                                <Image src="/images/label-image.png" className="task-img" alt="" width={366} height={518} />
                                <div className="task-info">
                                    <h1 className="ibm-plex-mono-bold">Label images</h1>
                                    <p className="ibm-plex-mono-light">Identify and classify objects in images into different categories, thereby helping to easily organize and manage image databases.</p>
                                </div>
                            </div>
                            <div className="task-item">
                                <Image src="/images/image-class.png" className="task-img" alt="" width={366} height={518} />
                                <div className="task-info">
                                    <h1 className="ibm-plex-mono-bold">Image classification</h1>
                                    <p className="ibm-plex-mono-light">Identify and analyze objects in images, recognize faces, objects, landscapes and many other elements</p>
                                </div>
                            </div>
                            <div className="task-item">
                                <Image src="/images/document-class.png" className="task-img" alt="" width={366} height={518} />
                                <div className="task-info">
                                    <h1 className="ibm-plex-mono-bold">Document classification</h1>
                                    <p className="ibm-plex-mono-light">Label the text, identify and classify elements in the text such as names, locations, organizations, keywords, ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="intro-container">
                <div className="intro-content">
                    <h1 className="ibm-plex-mono-bold intro-title">How It Works</h1>
                    <div className="intro-list-top">
                        <div className="intro-item">
                            <Image src="/images/add.svg" alt="" width={76} height={76} />
                            <div className="intro-des">
                                <h1 className="ibm-plex-mono-bold">Custom Task Creation</h1>
                                <p className="ibm-plex-mono-light">Design tasks according to your unique requirements.</p>
                            </div>
                        </div>
                        <div className="intro-item">
                            <Image src="/images/upload.svg" alt="" width={76} height={76} />
                            <div className="intro-des">
                                <h1 className="ibm-plex-mono-bold">Data Upload & API Integration</h1>
                                <p className="ibm-plex-mono-light">Easily upload your data or connect your model via API.</p>
                            </div>
                        </div>
                        <div className="intro-item">
                            <Image src="/images/slider.svg" alt="" width={76} height={76} />
                            <div className="intro-des">
                                <h1 className="ibm-plex-mono-bold">Skill Set Definition</h1>
                                <p className="ibm-plex-mono-light">Specify the skills your tasker pool requires to be successful.</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-list-bot">
                        <div className="intro-item">
                            <Image src="/images/wallet.svg" alt="" width={76} height={76} />
                            <div className="intro-des">
                                <h1 className="ibm-plex-mono-bold">Pay for quality of work</h1>
                                <p className="ibm-plex-mono-light">Set the maximum price you are willing to pay per task and the system will control payouts based on each taskers' quality of work.</p>
                            </div>
                        </div>
                        <div className="intro-item">
                            <Image src="/images/vision.svg" alt="" width={76} height={76} />
                            <div className="intro-des">
                                <h1 className="ibm-plex-mono-bold">Tasker Reputation</h1>
                                <p className="ibm-plex-mono-light">Taskers earn Reputation Scores from each task submitted. This score directly impacts their earnings and ability to work specific tasks.</p>
                            </div>
                        </div>
                        <div className="intro-item">
                            <Image src="/images/star.svg" alt="" width={76} height={76} />
                            <div className="intro-des">
                                <h1 className="ibm-plex-mono-bold">Custom Task Creation</h1>
                                <p className="ibm-plex-mono-light">Design tasks according to your unique requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
               <div className="communiti-2">
                    <div className="com2-content">
                        <div className="com2-left">
                            <h1 className="ibm-plex-mono-bold">Ready to build?</h1>
                            <p className="ibm-plex-mono-regular">A large, seemingly overwhelming task can sometimes be transformed into a set of smaller, more manageable microtasks that can each be accomplished independently.
                            Contact us now!</p>
                            <div className="con-btn-bot">
                            <a href="#" className="con-us ibm-plex-mono-regular" >Contact Us </a>
                            </div>
                        </div>
                        <div className="com2-right">
                            <Image src="/images/readytobuild.png" className="contact-img" alt="" width={509} height={463}/>
                        </div>
                    </div>
               </div>
               <div className="footer-container">
                    <div className="footer-left">
                        <Image src="/images/logo.png" alt="" width={250} height={50} className="footer-logo"/>
                        <h1 className="ibm-plex-mono-bold">Connect with WorkEvo Community</h1>
                        <div className="footer-contact">
                            <a href="#"><Image src="/images/facebook.svg" alt="" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/linkedin.svg" alt="" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/telegram.svg" alt="" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/youtube.svg" alt="" width={40} height={40}/></a>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="com-infor">
                            <h1 className="com-name ibm-plex-mono-bold">WorkEvo Company Pte, Ltd.</h1>
                            <p className="com-email ibm-plex-mono-regular">Email: support@workevo.com</p>
                            <p className="com-phone ibm-plex-mono-regular">Phone: +84 202978 5418</p>
                            <p className="com-addr ibm-plex-mono-regular">Address: Luxury Park Views building, 32D Duong Dinh Nghe,
                            Cau Giay, Ha Noi</p>
                        </div>
                        <div className="quick-link">
                            <h1 className="ibm-plex-mono-bold">Quick Links</h1>
                            <a href="#" className="ibm-plex-mono-regular">Home</a>
                            <a href="#" className="ibm-plex-mono-regular">Whitepaper</a>
                            <a href="#" className="ibm-plex-mono-regular">Tokenomics</a>
                        </div>
                    </div>
               </div>
               <div className="copyright">
                    <p className="ibm-plex-mono-regular">Copyright ©  2024 WorkEvo Company Pte, Ltd.. All rights reserved.</p>
               </div>
            </div>  
        </div>
    );
};

export default page;