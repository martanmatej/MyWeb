import React, { useState, useEffect } from 'react';
import Font, { Text } from 'react-font';
import ReactModal from "react-modal";
import { AnimatePresence, motion } from 'framer-motion';
import * as Icon from 'react-icons/ci';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function HeaderComponent() {

    type user={
        email: any|null,
        password: string,
    }
    const [textSize, setTextSize] = useState(15);
    const [width, setWidth] = useState(window.innerWidth);

    const [isVisible, setIsVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(0);

    const [viewPassword, setViewPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [userTemp, setUserTemp] = useState<user>({email: null, password: ""});


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                userTemp.email,
                userTemp.password
            );
        } catch (error) {
            console.log(error);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                userTemp.email,
                userTemp.password
            );
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {

    }
    

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        if (width < 700) {
            setTextSize(10);
            console.log(window.innerWidth)
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            }
        } else {
            setTextSize(15);
            console.log(window.innerWidth);
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            }
        }
    })


    return <div style={{ flexDirection: 'row', display: 'flex', width: '100%', userSelect: 'none' }}>
        <motion.a
            whileHover={{
                scale: 1.13
            }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => { setMenuVisible(1) }}
            onHoverEnd={() => { setMenuVisible(0) }}
            style={{ display: 'flex', flexDirection: 'row' }}
        >
            <Font family='Sacramento' >
                <p onDoubleClick={() => { setIsVisible(true) }} style={{ paddingLeft: '40%', paddingRight: '20%' }}>Matěj Martan</p>
            </Font>

            <Icon.CiLogin
                size={55}
                style={{ opacity: menuVisible, alignSelf: 'center', paddingLeft: '25%' }}
                onClick={() => {
                    setIsVisible(true)
                }}
            />
        </motion.a>
        {auth.currentUser?.email !== null || '' && (
            <p>{auth.currentUser?.email}</p>
        )}


        <div>
            <ReactModal
                isOpen={isVisible}
                ariaHideApp={false}

                style={{
                    content: {
                        width: '50%',
                        height: '50%',
                        top: '25%',
                        left: '25%',
                        background: 'linear-gradient(-31deg, #535353 88%, #202124 12%)',
                        color: 'white',
                        userSelect: 'none',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <p style={{ fontSizeAdjust: 1, paddingLeft: '2%' }} onClick={() => {
                        setIsVisible(false);
                        setUserTemp({email: "", password: ""});
                        setViewPassword(false);
                    }}>X</p>
                    <div
                        style={{ marginTop: '12%' }}
                    >
                        {!viewPassword && (
                            <div>
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input
                                        value={userTemp.email}
                                        placeholder="Email"
                                        type="email"
                                        style={{
                                            marginLeft: '40%',
                                            height: 45,
                                            width: '20%',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            borderTop: 0,
                                            borderRight: 0,
                                            borderLeft: 0,
                                            borderBottom: '1px solid white',
                                            outline: 0,
                                        }}
                                        onChange={(text) => {
                                            setUserTemp({email: text.target.value, password: ""});
                                            setEmail(text.target.value);
                                        }}
                                    />

                                    <Icon.CiPaperplane
                                        size={25}
                                        style={{ paddingLeft: '1%' }}
                                        onClick={() => {
                                            if (userTemp.email !== '') {
                                                setViewPassword(true);
                                            }
                                        }}
                                    />
                                </motion.div>

                            </div>
                        )}
                        {viewPassword && (
                            <div>
                                <motion.div
                                    whileTap={{ scale: 0.9 }}

                                >
                                    <input
                                        value={userTemp.password}
                                        placeholder="Heslo"
                                        type="password"
                                        style={{
                                            marginLeft: '40%',
                                            height: 45,
                                            width: '20%',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            borderTop: 0,
                                            borderRight: 0,
                                            borderLeft: 0,
                                            borderBottom: '1px solid white',
                                            outline: 0,

                                        }}
                                        onChange={(text) => {
                                            setUserTemp({email: email,password: text.target.value})
                                        }}
                                    />
                                    <Icon.CiPaperplane
                                        size={25}
                                        style={{ paddingLeft: '1%' }}
                                        onClick={() => {
                                            if (userTemp.password !== '') {
                                                login();
                                                setUserTemp({email: null ,password: ''});
                                                setEmail("");
                                                setIsVisible(false);
                                                setViewPassword(false);
                                            }

                                        }}
                                    />
                                </motion.div>
                            </div>
                        )}
                        <Font family='Catamaran'>
                            <p style={{ fontSize: textSize, marginLeft: '45%' }}>Registrace zde!</p>

                        </Font>


                    </div>
                </motion.div>
            </ReactModal>
        </div>
        <div id='RightSide' style={{
            justifyContent: 'space-between', flexDirection: 'row', display: 'flex',
            paddingLeft: '50%', width: '28%', fontFamily: 'Jost', paddingTop: '1%', marginRight: '0%'
        }}>
                
                <p style={{ fontFamily: 'Tahoma' }} onClick={() => {

                }}>About me</p>
                <p style={{ fontFamily: 'Tahoma' }}>My work</p>
                <p style={{ fontFamily: 'Tahoma' }}>Socials</p>
        </div>
    </div>
}



export default HeaderComponent;