
import Code from "./Code";
import Header from "./Header";
import Result from "./Result";
const Home = () =>{
    return (
        //using fragments<> for wrapping, so that no extra DOM is created , if we use div extra Dom is created
        // our webpage is divided into 3 parts ie
        <>
            <Header/>
            <Code/>
            <Result/>
        </>
    );
}
export default Home;