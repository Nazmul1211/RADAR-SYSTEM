import Navbar from './Navbar';
import Footer from './Footer';
import FirebaseWriteTest from './Components/FirebaseWriteTest';
import FirebaseReadOperation from './Components/FirebaseReadOperation';

const Home = () => {
    return (
        <>
            <div className='max-h-screen'>
                <div className='mb-64'>
                    <Navbar></Navbar>
                    <div>
                        <FirebaseWriteTest></FirebaseWriteTest>
                        <FirebaseReadOperation></FirebaseReadOperation>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
};

export default Home;