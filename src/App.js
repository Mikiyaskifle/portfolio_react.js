
import './App.css';
import Home from './componets/homes/home'
import Heading from './componets/Heading/heading'
import  Myervice from '../../personal-app/src/componets/myService/myService'
import Services from './componets/myService/services'
import  Price from './componets/pricePlane/price'
import Order from '../../personal-app/src/componets/ordernow/order'
import Recommend from '../../personal-app/src/componets/Recommendations/recommend'
import Amezing from '../../personal-app/src/componets/Amezing work/Amezing'
import Edu from './componets/Amezing work/edu'
import Certificate from '../../personal-app/src/componets/certificate/certificate'
import Workstori from'../../personal-app/src/componets/Recommendations/workstori'
// import Certificatess from '../../personal-appess'
// import Portfoil from '../../personal-app/src/componets/portfoil/portfoil'
import Contactme from './componets/contactme/contactme';
function App() { 
  return (
    <div>
      <Heading/>
       <Home/>
      <Myervice/>
      <Services/>
      <Price/>
      <Order/>
      <Recommend/>
      <Amezing/>
      <Edu/>
      <Certificate/>
      <Workstori/>
      
      {/* <Portfoil/> */}
      <Contactme/>
    </div>
  );
}

export default App;
