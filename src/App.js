import { Container } from '@mui/material';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Navbar } from './components/Navbar/Navbar';
import { SectionDown } from './components/Section/SectionDown';
import { SectionLast } from './components/Section/SectionLast';
import { SectionTop } from './components/Section/SectionTop';
import { MySlide } from './components/slide/MySlide';
import RowCard from './components/RowCard/RowCard';
import { Formset } from './components/Formset/Formset';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
     
      {/* sections */}
      <SectionTop/>
      <SectionDown/>
      {/* carasoul */}
      <Container>

      <MySlide/>
      </Container>
      {/* section */}
      <SectionLast/>
      {/* card */}
      <RowCard/>
      {/* form */}
      <Formset/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
