import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TranslateIcon from '@material-ui/icons/Translate';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CachedIcon from '@material-ui/icons/Cached';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


const DashBoard = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {
                open ? (
                    <CustomModal>
                        <div className="touch-outside" onClick={() => setOpen(false)}>

                        </div>
                        <div className="container">
                            <div className="modalHeader">
                                <h3></h3>
                                <h3>Message from Hosterr</h3>
                                <CloseIcon style={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
                            </div>
                            <div className="desc">
                                This feature will be enabled soon, stay tunned.
                            </div>
                        </div>
                    </CustomModal>
                ) : (
                    <></>
                )
            }
            <Container>
                <PageOneHeader>
                    <div className="one">
                        <a href="/" className="title">
                            Hosterr
                        </a>
                        <div className="admin mobile-only">
                            Admin
                        </div>
                        <div className="together">
                            <button className="lang" onClick={() => setOpen(true)}>
                                <TranslateIcon className="icon-one" />
                                EN
                            </button>
                            <div className="btn" onClick={() => setOpen(true)}>
                                <AddCircleIcon className="icon" />
                                <>
                                    List your hostel
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="two not-mobile">
                        Help us grow by giving information about your university hostel details.
                        <a href="/" className="two-link">Know more*</a>
                    </div>
                </PageOneHeader>
                <div className="main">
                    <Left>
                        <div className="left-header">
                            <div>
                                <DashboardIcon className="left-icon"/>
                                Dashboard
                            </div>
                            <div className="mobile-only">
                                <MenuIcon className="left-icon-mob"/>
                            </div>
                        </div>
                        <div className="left-item active">
                            <HomeIcon className="left-icon"/>
                            Home
                        </div>
                        <div className="left-item">
                            <RoomIcon className="left-icon"/>
                            Room details
                        </div>
                        {/* <div className="left-item">
                            <VpnKeyIcon className="left-icon"/>
                            Change Password
                        </div> */}
                        <div className="left-item">
                            <CachedIcon className="left-icon"/>
                            Room Change
                        </div>
                        <div className="left-item">
                            <EmojiFoodBeverageIcon className="left-icon"/>
                            Hostel Canteen
                        </div>
                        <div className="left-item">
                            <SupervisorAccountIcon className="left-icon"/>
                            Contact Admin
                        </div>
                        <div className="left-item">
                            <LocalLaundryServiceIcon className="left-icon"/>
                            Room Service
                        </div>
                        <div className="left-item">
                            <MonetizationOnIcon className="left-icon"/>
                            All Payments
                        </div>
                        <div className="left-item">
                            <AccountCircleIcon className="left-icon"/>
                            My profile
                        </div>
                    </Left>
                    <Right>
                        <div className="head not-mobile">
                            <h2>Student Dashboard</h2>
                            <div className="left-links">
                                <p>Dashboard > Home</p>
                                <button>
                                    <ChatBubbleIcon className="icon"/>
                                    Talk to Admin
                                </button>
                            </div>
                        </div>
                        <div className="general">
                            <div className="card">
                                <div className="card-top">
                                    <p>Due Payments</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>3</h1>
                                    <p>Payments due over 4600 INR.</p>
                                </div>
                                <div className="desc">No last date for this semester but it suggested to pay as soon as possible.
                                <a> Pay now</a></div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Room Service</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>7</h1>
                                    <p>Left for this semester</p>
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque.
                                <a> Request Increase</a></div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Room Change</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>1</h1>
                                    <p>Left for this semester</p>
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque.</div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Profile Status</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <h1>78</h1>
                                    <p>Percentage of your profile is complete</p>
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque.</div>
                            </div>
                            <div className="card">
                                <div className="card-top">
                                    <p>Contact Hostel Admin</p>
                                    <MoreVertIcon className="icon"/>
                                </div>
                                <div className="card-mid">
                                    <img src="https://icon-library.com/images/gmail-logo-icon/gmail-logo-icon-8.jpg" alt="" />
                                </div>
                                <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, atque. 
                                <a> Contact Now</a></div>
                            </div>
                        </div>
                    </Right>
                </div>
            </Container>
        </>
    )
}

export default DashBoard

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    .main{
        display: flex;
        justify-content: space-between;
        flex: 1;

        @media only screen and (max-width: 600px){
            justify-content: flex-start;
            flex-direction: column;
        }
    }

    .together{
        display: flex;
        align-items: center;
    }

    a{
        color: cornflowerblue;
        cursor: pointer;
    }

    .mobile-only{
        visibility: hidden;
    }
    
    @media only screen and (max-width: 600px){
        .mobile-only{
            visibility: visible;
        }
        .not-mobile{
            display: none !important;
            /* visibility: hidden; */
            /* height: 0; */
            /* width: 0; */
            /* overflow: hidden; */
        }
    }
`

const PageOneHeader = styled.div`
    position: relative;
    
    .one{
        height: 64px;
        background-color: #7c83d3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        
        .title{
            font-size: 24px;
            color: white;
            font-weight: 700;
            text-decoration: none;
        }

        .icon-one{
            fill: white;
            font-size: 1.2rem;
            margin-right: 6px;
        }

        .lang{
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            background-color: transparent;
            border: none;
            margin-right: 20px;
            color: white;
            margin-top: 5px;
            cursor: pointer;
            padding: 8px 15px;
            border-radius: 15px;
        }

        .lang:hover{
            background-color: #a1a6dd;
            transition-duration: 250ms;
        }
        
        .btn{
            font-size: 0.7rem;
            background-color: #f3f5f7;
            color: #333;
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 20px;
            font-weight: 500;

            display: flex;
            align-items: center;

            .icon{
                fill: #333;
                margin-right: 5px;
                font-size: 1.2rem;
            }
        }
    }


    .two{
        height: 42px;
        background-color: #f3f5f7;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;

        border-bottom: 1px solid #ebdfdf;

        .two-link{
            margin-left: 5px;
        }
    }

    @media only screen and (max-width: 600px) {
        .one{
            height: 54px;
            padding: 0 1rem;
            
            .title{
                font-size: 22px;
                color: white;
                font-weight: 700;
                text-decoration: none;
            }

            .admin{
                font-size: 0.55rem;
                margin-left: 5px;
                text-transform: uppercase;
                color: white;
                letter-spacing: 0.1rem;
            }
            
            .lang{
                visibility: hidden;
            }

            .btn{
                visibility: hidden;
                
            }

            .m-icon{
                fill: white;
                font-size: 2rem;
            }
        }


        .two{
            height: 42px;
            background-color: #f3f5f7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;

            .two-link{
                margin-left: 5px;
            }
        }
  
    }
`

const Left = styled.div`
    width: 320px;
    background-color: #333;
    display: flex;
    flex-direction: column;

    .left-header{
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: white;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        background-color: #585353;
        padding: 10px;
        margin-bottom: 25px;

        div{
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
        }

        .left-icon{
            fill: white;
            margin-right: 10px;
            font-size: 2rem;
        }
    }

    .left-item{
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        color: white;
        font-weight: 300;
        padding: 0.75rem 1rem;
        background-color: #0000001f;
        margin: 0.2rem 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: grey;

        .left-icon{
            fill: grey;
            font-size: 1.25rem;
            margin: -4px 10px 0 0;
        }
    }

    
    .left-item:hover{
        background-color: #0000006b;
        transition-duration: 250ms;
        color: white;

        .left-icon{
            fill: white;
        }
    }

    .active{
        background-color: #b9aaaa69;
        color: white;
        
        .left-icon{
            fill: white;
        }
    }

    .active:hover{
        background-color: #b9aaaa69;
    }



    @media only screen and (max-width: 600px){
        width: 100%;
        background-color: #333;
        display: flex;
        flex-direction: column;
        

        .left-header{
            font-size: 1rem;
            padding: 10px;
            margin-bottom: 0;
            justify-content: space-between;
            background-color: #5c63a9;

            .left-icon{
                fill: white;
                margin-right: 10px;
                font-size: 1.4rem;
            }

            .left-icon-mob{
                fill: white;
                font-size: 2rem;
            }

            div{
                color: white;
                display: flex;
                align-items: center;
            }
        }

        .left-item{
            display: none;
        }

        
        .left-item:hover{
            background-color: #0000006b;
            transition-duration: 250ms;
            color: white;

            .left-icon{
                fill: white;
            }
        }

        .active{
            background-color: #b9aaaa69;
            color: white;
            
            .left-icon{
                fill: white;
            }
        }

        .active:hover{
            background-color: #b9aaaa69;
        }

    }

`

const Right = styled.div`
    flex: 1;
    background-color: #edf1f5;

    .head{
        padding: 16px 24px;
        box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-weight: 400;
            font-size: 1.25rem;
        }

        .left-links{
            display: flex;
            justify-content: space-between;
            align-items: center;

            p{
                font-size: 0.8rem;
                color: grey;
                margin-right: 15px;
            }

            button{
                display: flex;
                align-items: center;
                padding: 5px 10px;
                font-size: 0.8rem;
                border: none;
                background-color: cornflowerblue;
                color: white;
                border-radius: 5px;
                cursor: pointer;
                
                .icon{
                    fill: white;
                    margin-right: 5px;
                }
            }
        }
    }

    .general{
        padding: 1.2rem;
        padding-right: 0;

        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .card{
            width: 32%;
            height: 250px;
            background-color: white;
            margin-bottom: 10px;
            margin-right: 1%;
            border-radius: 10px;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .card-top{
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 1rem;
                }

                .icon{
                    cursor: pointer;
                }

            }

            .card-mid{
                text-align: center;
                h1{
                    color: orange;
                    font-size: 5rem;
                    line-height: 5rem;
                }
                p{
                    color: orange;
                    font-size: 0.8rem;
                }

                img{
                    height: 7rem;
                }
            }

            .desc{
                font-size: 0.7rem;
                color: grey;
                text-align: center;
            }
        }
    }



    @media only screen and (max-width: 600px){
        flex: 1;

        .head{
            padding: 16px 24px;
            box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2{
                font-weight: 400;
                font-size: 1.25rem;
            }

            .left-links{
                display: flex;
                justify-content: space-between;
                align-items: center;

                p{
                    font-size: 0.8rem;
                    color: grey;
                    margin-right: 15px;
                }

                button{
                    display: flex;
                    align-items: center;
                    padding: 5px 10px;
                    font-size: 0.8rem;
                    border: none;
                    background-color: cornflowerblue;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    
                    .icon{
                        fill: white;
                        margin-right: 5px;
                    }
                }
            }
        }

        .general{
            padding: 0.5rem;
            display: flex;
            justify-content: flex-start;
            margin: 5px 0 15px 0;

            .card{
                width: 100%;
                height: 270px;
                margin-right: 0;
                border-radius: 10px;
                box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .card-top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p{
                        font-size: 1rem;
                    }

                    .icon{
                        cursor: pointer;
                    }

                }

                .card-mid{
                    text-align: center;
                    h1{
                        color: orange;
                        font-size: 5rem;
                        line-height: 5rem;
                    }
                    p{
                        color: orange;
                        font-size: 0.8rem;
                    }

                    img{
                        height: 7rem;
                    }
                }

                .desc{
                    font-size: 0.7rem;
                    color: grey;
                    text-align: center;
                }
            }
        }

    }
`

const CustomModal = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 100;

    .touch-outside{
        height: 100vh;
        width: 100vw;
        background-color: #00000087;
    }    

    .container{
        height: auto;
        width: 50vw;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 35vh;
        left: 25vw;
        padding: 1rem;

        .desc{
            font-size: 0.9rem;
            color: grey;
            font-weight: 300;
            margin: auto;
            margin-top: 1rem;
            text-align: center;
            width: 70%;
        }
    }

    .modalHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddcccc;
        padding: 0.6rem 0;
    }
`