import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner/Banner';
import Programs from './Programs/Programs';
import Services from './Services/Services';
import Stat from './Stat';


const Home = () => {
    const [user, loading] = useAuthState(auth);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      {
        user && <Services></Services>
      }
      <Programs></Programs>
      <Stat></Stat>
      
      <Footer></Footer>
      
    </div>
  );
};

export default Home;