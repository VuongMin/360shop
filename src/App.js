import { Header } from "./components/Header";
import { useStateValue } from './store/StateProvider'
import { useEffect } from 'react'
import Commerce from '@chec/commerce.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { ProductDetails } from './pages/ProductDetails';
import { Footer } from "./components/Footer";
import { Cart } from "./pages/Cart";
import { Introduce } from "./pages/Introduce";
import { Recruitment } from "./pages/Recruitment";
import { Winter } from "./pages/Winter";
import { Alert,Container } from "react-bootstrap";
function App() {
  const commerce = new Commerce('pk_test_34952d4dcaee58b76216b5da141bef9d07e04e4a194d8');
  const [{ products, userLogin }, dispatch] = useStateValue()
  useEffect(() => {
    commerce.products.list().then((products) => {
      if (products) {
        const { data } = products
        dispatch({
          type: 'SET_ALL_PRODUCTS',
          data: data
        })
      }
    });
    return () => {

    }
  }, [])
  useEffect(() => {
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
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const [userCRR] = user.providerData

        //  SET USER IN STATE GLOCAL
        dispatch({
          type: 'SET_USER_LOGIN',
          data: userCRR
        })
      } else {

        dispatch({
          type: 'SET_USER_LOGIN',
          data: null
        })
      }
    })
    return () => {

    }
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/he-thong-cua-hang'
            element={
              <Container>
                <Alert variant="success">
                  <Alert.Heading>Oh hey! wellcom!</Alert.Heading>
                  <p>
                   Cửa hàng chúng tôi đang cập nhật ....Loading!
                  </p>
                </Alert>
              </Container>
            }>

          </Route>
          <Route path='/thu-dong-moi' element={<Winter />}></Route>
          <Route path='/tuyen-dung' element={<Recruitment />}></Route>
          <Route path='/tin-tuc' element={<Introduce />}></Route>
          <Route path='/gioi-thieu' element={<Introduce />}></Route>
          <Route path='/gio-hang' element={<Cart />}></Route>
          <Route path='/cua-hang/:id' element={<ProductDetails />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path="/360shop" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
