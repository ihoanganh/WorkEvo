"use client";
import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBars } from '@fortawesome/free-solid-svg-icons';
import "./homewk.css"
import Menu from '@/app/components/Menu';
const page = () => {
    return (
        <div className="wk-container-home ">
            <div className="wk-home">
                <div className="wk-banner-top">
                    <div className="wk-logo-top">
                        <Image src="/images/logo.png" width={224} height={47}/>
                    </div>
                    {/* <div ><FontAwesomeIcon icon={faBars}/></div> */}
                    {/* <div className="wk-menu-list">
                        <a href="#" className="wk-menu-item" >For Vendors</a>
                        <a href="#" className="wk-menu-item">For Workers</a>
                        <a href="#" className="wk-menu-item">Contact Us</a>
                        <a href="#" className="wk-menu-item">Whitepaper</a>
                        <a href="#" className="wk-menu-item">Takenomics</a>
                    </div> */}
                    <Menu activePage="worker" />
                </div>
                <div className="wk-banner-content">
                <div className="wk-banner-left">
                    <h1 className="ibm-plex-mono-bold">Work and Earn Every minute</h1>
                    <p className="ibm-plex-mono-light">WorkEvo is a Web3 app that rewards users for tasks completion</p>
                    <div className="wk-left-btn">
                        <div className="wk-con-btn">
                            <a href="#" className="wk-con-us ibm-plex-mono-regular" >Become a Worker </a>
                        </div>
                        <div className="wk-watch-vids">
                            <a href="#" className="wk-watch-vd ibm-plex-mono-regular"><i className="wk-icon-container"><FontAwesomeIcon icon={faPlay} className="wk-icon-play"/></i>
                            Watch Video</a>
                        </div>
                    </div>
                </div>
                <div className="wk-banner-right">
                    <Image src="/images/worker/hacker.png" alt="" width={554} height={409} />
                </div>
                </div>

               <div className="wk-communiti-1">
                    <div className="wk-com1-content">
                        <h1 className="ibm-plex-mono-bold">Join very active worker communities</h1>
                        <div className="wk-com1-list">
                            <div className="wk-com1-item">
                                <div className="ibm-plex-mono-semibold wk-com1-num">100K+</div>
                                <div className="ibm-plex-mono-medium wk-com1-title">Worker</div>
                            </div>
                            <div className="wk-com1-item">
                                <div className="ibm-plex-mono-semibold wk-com1-num">100,000+</div>
                                <div className="ibm-plex-mono-medium wk-com1-title">Tasks</div>
                            </div>
                            <div className="wk-com1-item">
                                <div className="ibm-plex-mono-semibold wk-com1-num">$12,7M</div>
                                <div className="ibm-plex-mono-medium wk-com1-title">Earned</div>
                            </div>
                            <div className="wk-com1-item">
                                <div className="ibm-plex-mono-semibold wk-com1-num">1000+</div>
                                <div className="ibm-plex-mono-medium wk-com1-title">New task per day</div>
                            </div>
                        </div>
                        <a href="#" className="wk-com1-btn ibm-plex-mono-medium">Join Community</a>
                    </div>
               </div>
               <div className="wk-about-container">
                    <div className="wk-about-left">
                        <h1 className="ibm-plex-mono-bold">About WorkEvo</h1>
                        <p className="ibm-plex-mono-light">Users earn money in their free time by completing tasks we offer. Tasks include data and image censorship, each task will take from 5 -15 minutes, and you will receive a number of WEA corresponding to the difficulty of each task.</p>
                        <p className="ibm-plex-mono-light">WorkEvo platform has more than 100 new tasks every day for everyone, you can preview tasks and rewards to decide to start working.</p>
                        <a href="#" className="wk-about-btn ibm-plex-mono-regular">Whitepaper</a>
                    </div>
                    <div className="wk-about-right">
                        <Image src="/images/worker/about.png" alt="" width={1089} height={680}/>
                    </div>
               </div>
               <div className="wk-task-container">
                    <div className="wk-task-header">
                        <h1 className="ibm-plex-mono-bold wk-task-title">Work to Earn</h1>
                    </div>
                    <div className="wk-task-content">
                        <div className="wk-task-top">
                            <div className="wk-task-item">
                                <div className='wk-img-container'>
                                    <Image src="/images/fixed-form.png" className="wk-task-img" alt="" width={520} height={325} />
                                </div>
                                <div className="wk-task-info">
                                    <h1 className="ibm-plex-mono-bold">Fixed Forms</h1>
                                    <p className="ibm-plex-mono-light">Human evaluation of Key-Value pairs extracted by Computer Vision</p>
                                </div>
                            </div>
                            <div className="wk-task-item">
                                <div className='wk-img-container'>
                                    <Image src="/images/verify-image.png" className="wk-task-img" alt="" width={520} height={325} />
                                </div>
                                <div className="wk-task-info">
                                    <h1 className="ibm-plex-mono-bold">Verify Image</h1>
                                    <p className="ibm-plex-mono-light">Label products, get human reviews for unsafe content, such as explicit adult content or violent content</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <div className="wk-intro-container">
                <div className="wk-intro-content">
                    <h1 className="ibm-plex-mono-bold wk-intro-title">How to Earn in 4 Steps?</h1>
                    <div className='wk-four-step'>
                    <div className="wk-intro-list-top">
                        <div className="wk-intro-item">
                            <Image src="/images/add.svg" alt="" width={76} height={76} />
                            <div className="wk-intro-des">
                                <h1 className="ibm-plex-mono-bold">Step 1</h1>
                                <p className="ibm-plex-mono-light">Register a new Metamask wallet</p>
                            </div>
                        </div>
                        <div className="wk-intro-item">
                            <Image src="/images/wallet.svg" alt="" width={76} height={76} />
                            <div className="wk-intro-des">
                                <h1 className="ibm-plex-mono-bold">Step 2</h1>
                                <p className="ibm-plex-mono-light">Link your Metamask wallet to WorkEvo</p>
                            </div>
                        </div>
                        <div className="wk-intro-item">
                            <Image src="/images/worker/choose-task.svg" alt="" width={76} height={76} />
                            <div className="wk-intro-des">
                                <h1 className="ibm-plex-mono-bold">Step 3</h1>
                                <p className="ibm-plex-mono-light">Choose task (Verify data or Image)</p>
                            </div>
                        </div>
                        <div className="wk-intro-item">
                            <Image src="/images/worker/pig.svg" alt="" width={76} height={76} />
                            <div className="wk-intro-des">
                                <h1 className="ibm-plex-mono-bold">Step 4</h1>
                                <p className="ibm-plex-mono-light">Start working and receive rewards</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='wk-intro-img'>
                        <Image src="/images/worker/4-steps.png" alt="" width={555} height={541} />
                    </div>
                    </div>
                </div>
               </div>
               {/* <div className="wk-communiti-2">
                    <div className="wk-com2-content">
                        <div className="wk-com2-left">
                            <h1 className="ibm-plex-mono-bold">Ready to build?</h1>
                            <p className="ibm-plex-mono-regular">A large, seemingly overwhelming task can sometimes be transformed into a set of smaller, more manageable microtasks that can each be accomplished independently.
                            Contact us now!</p>
                        </div>
                        <div className="wk-com2-right">
                            <Image src="/images/readytobuild.png" className="wk-contact-img" alt="" width={509} height={463}/>
                        </div>
                    </div>
               </div> */}
               <div className='wk-wea-container'>
                    <div className='wk-wea-left'>
                        <h1 className='ibm-plex-mono-bold'>WorkEvo token (WEA)</h1>
                        <h2 className='ibm-plex-mono-bold'>WorkEvo (REX) token is the main token of WorkEvo ecosystem</h2>
                        <p className='ibm-plex-mono-light'>REX is a BEP20 token, which is the main token of the WorkEvo ecosystem. Users will receive WorkEvo tokens for completing the tasks in Workevo.com</p>
                        <p className='ibm-plex-mono-light'>You will receive WEA when the system evaluates the task as completed.</p>
                        <div className='wea-btn'>
                            <a href="#" className='wk-buy-btn ibm-plex-mono-medium'>Buy WEA Now</a>
                        </div>
                    </div>
                    <div className='wk-wea-right'>
                        <Image src="/images/worker/token.png" alt="" width={650} height={780}/>
                    </div>
               </div>
               <div className="wk-footer-container">
                    <div className="wk-footer-left">
                        <Image src="/images/logo.png" alt="" width={250} height={50} className="wk-footer-logo"/>
                        <h1 className="ibm-plex-mono-bold">Connect with WorkEvo Community</h1>
                        <div className="wk-footer-contact">
                            <a href="#"><Image src="/images/facebook.svg" className='icon-contact' alt="" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/linkedin.svg" className='icon-contact' alt="" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/telegram.svg" className='icon-contact' alt="" width={40} height={40}/></a>
                            <a href="#"><Image src="/images/youtube.svg" className='icon-contact' alt="" width={40} height={40}/></a>
                        </div>
                    </div>
                    <div className="wk-footer-right">
                        <div className="wk-com-infor">
                            <h1 className="wk-com-name ibm-plex-mono-bold">WorkEvo Company Pte, Ltd.</h1>
                            <p className="wk-com-email ibm-plex-mono-regular">Email: support@workevo.com</p>
                            <p className="wk-com-phone ibm-plex-mono-regular">Phone: +84 202978 5418</p>
                            <p className="wk-com-addr ibm-plex-mono-regular">Address: Luxury Park Views building, 32D Duong Dinh Nghe,
                            Cau Giay, Ha Noi</p>
                        </div>
                        <div className="wk-quick-link">
                            <h1 className="ibm-plex-mono-bold">Quick Links</h1>
                            <a href="#" className="ibm-plex-mono-regular">Home</a>
                            <a href="#" className="ibm-plex-mono-regular">Whitepaper</a>
                            <a href="#" className="ibm-plex-mono-regular">Tokenomics</a>
                        </div>
                    </div>
               </div>
               <div className="wk-copyright">
                    <p className="ibm-plex-mono-regular">Copyright ©  2024 WorkEvo Company Pte, Ltd.. All rights reserved.</p>
               </div>
            </div>  
        </div>
    );
};

export default page;