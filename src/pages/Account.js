import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import { BreadCrumb } from '../components/BreadCrumb'
import { Section, SectionBody } from '../components/Section'
import { useForm } from "react-hook-form";
import { Button } from '../components/Button';
import { useStateValue } from '../store/StateProvider'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, signInWithPopup, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//COMPONENT HAS USER 
const UserAccount = ({ list }) => {
    const [{ userLogin }, dispatch] = useStateValue()
    const AccountTab = () => {
        return (
            <Form className='' style={{maxWidth:'80%',margin:'0 auto'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Avatar</Form.Label>
                    <img className='mx-3' src={userLogin.photoURL} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder={userLogin.email} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dislay Name</Form.Label>
                    <Form.Control type="email" placeholder={userLogin.displayName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="email"
                        placeholder={userLogin.phoneNumber ? userLogin.phoneNumber : 'Chưa cập nhật'} />
                </Form.Group>
                <Button
                    text={'Cập nhật'}
                    iconsvg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                    </svg>}
                ></Button>
            </Form>
        )
    }
    const [activeTab, setactiveTab] = useState(<AccountTab />)
    const handelSignout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch({
                type: 'SET_USER_LOGIN',
                data: null
            })

        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <>
            <Col md={4}>
                <div className='account__list'>
                    {
                        list?.map((item, idx) => {
                            return <div className='account__list__gruop'
                                key={idx}
                            >
                                {item.svg}
                                {item.name == 'Thoát' ? <span
                                    onClick={() => handelSignout()}
                                >{item.name}</span> : <span>{item.name}</span>}
                            </div>
                        })
                    }
                </div>
            </Col>
            <Col md={8}>
                {
                    activeTab
                }
            </Col>

        </>
    )

}
export const Account = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDhJnwBJECrPVHmWS4BDZtPe0KngYVdJew",
        authDomain: "shop-71947.firebaseapp.com",
        projectId: "shop-71947",
        storageBucket: "shop-71947.appspot.com",
        messagingSenderId: "37528023198",
        appId: "1:37528023198:web:71959fd1d88a1b566f8b8f",
        measurementId: "G-T7228HYK5L"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //Local varible
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [{ userLogin }, dispatch] = useStateValue()
    const listCustom = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-rolodex" viewBox="0 0 16 16">
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
            </svg>, name: 'Account'
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-border-style" viewBox="0 0 16 16">
                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm8 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-4-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z" />
            </svg>, name: 'Đơn hàng'
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
            </svg>, name: 'Địa chỉ'
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>, name: 'Thoát'
        }
    ]
    const [typeForm, settypeForm] = useState(false) //False :Login form - True : Register Form
    const onSubmit = data => {
        if (typeForm) {
            //Register user
            handelRegisterUser(data)
        } else {
            handelLoginWithExistingUser(data)
        }
    }
    const handelRegisterUser = ({ email, password }) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    // console.log(user)
                }

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });

    }
    const handelLoginWithExistingUser = ({ email, password }) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    //Handel login socials
    const handelLoginFacebook = () => {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                const [userInfo] = user.providerData
                if (userInfo) {
                    dispatch({
                        type: "SET_USER_LOGIN",
                        data: userInfo
                    })
                }
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // const credential = FacebookAuthProvider.credentialFromResult(result);
                // const accessToken = credential.accessToken;


            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);


            });
    }
    const handelLoginGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const [userInfo] = user.providerData
                if (userInfo) {
                    dispatch({
                        type: "SET_USER_LOGIN",
                        data: userInfo
                    })
                }
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    console.log(userLogin);
    return (
        <div className='account'>
            <Container>
                <BreadCrumb content={{ cat: [{ name: 'Trang chủ' }], name: 'Tài khoản' }} />
            </Container>

            <Container>
                <Section>
                    <SectionBody>
                        <Row>

                            {
                                userLogin == null ?
                                    <Col md={6}>
                                        <h3 className="alert alert-success" role="alert" style={{ textTransform: 'uppercase' }}>{typeForm ? 'Tạo tài khoản' : 'Đăng nhập tài khoản'}</h3>
                                        <div className='account__left'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email"
                                                        {...register("email", { required: true })}
                                                    />

                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password"
                                                        {...register("password", { required: true })}
                                                    />
                                                </Form.Group>
                                                <div className='account__social'

                                                >
                                                    <div className='account__social__group'
                                                        onClick={() => handelLoginFacebook()}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                        </svg>
                                                        <b>facebook</b>
                                                    </div>
                                                    <div className='account__social__group'
                                                        onClick={() => handelLoginGoogle()}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />

                                                        </svg>
                                                        <b>Google</b>
                                                    </div>
                                                    {/* <div className='account__social__group'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                                        </svg>
                                                        <b>Phone</b>
                                                    </div> */}
                                                </div>
                                                <Button
                                                    type={'submit'}
                                                    text={typeForm ? 'Đăng ký' : 'Đăng Nhập'}
                                                    iconsvg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                    </svg>}
                                                    click={handleSubmit(onSubmit)}
                                                ></Button>

                                            </Form>
                                        </div>
                                        <div className='account__register'
                                            onClick={() => settypeForm(pre => !pre)}
                                        >
                                            <a href="#"> {typeForm ? 'Đăng nhập' : 'Đăng ký'}</a>
                                        </div>
                                    </Col> : <UserAccount list={listCustom} />


                            }


                        </Row>
                    </SectionBody>
                </Section>
            </Container>
        </div>
    )
}
