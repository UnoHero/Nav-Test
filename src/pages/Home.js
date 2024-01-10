import Navbar from '../components/navbar.js';
import Section from '../components/section.js';
import Footer from '../components/footer.js';
import { ReadMore } from "@navikt/ds-react";
import { Button } from "@navikt/ds-react";
import { Link } from 'react-router-dom';


const Home = () => (
    <div className="App">
      <Navbar />
  
      <Section />
      <div className='align'>
  
              <div className='Over-dropdown-text'>
                <p className='b-text'>Lurer du på hva du kan ha rett på av hjelp og økonmisk
                  <br/>
                  støtte fra støtte fra det offentlige i Norge?
                  <br/>
                  Gjennom MinVeileder kan du utforske dette.
                  </p>
              </div>
              <center>
  
              <div className='dropdown'>
  
                    <ReadMore header="Hva er MinVeileder">
                      Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
                      allergier som hindrer deg i arbeidet eller andre årsaker som må tas hensyn
                      til når du skal finne nytt arbeid. Du må oppgi hva som gjelder for deg, og
                      dokumentere de helsemessige årsakene du viser til.
                    </ReadMore>
                    <ReadMore header="Hva kan MinVeileder hjelpe deg med?">
                      Med helsemessige begrensninger mener vi funksjonshemming, sykdom,
                      allergier som hindrer deg i arbeidet eller andre årsaker som må tas hensyn
                      til når du skal finne nytt arbeid. Du må oppgi hva som gjelder for deg, og
                      dokumentere de helsemessige årsakene du viser til.
                    </ReadMore>
              </div>
              </center>
              <div className='bottom-text'>
        <p className='b-text'>Det er viktig å understreke at MinVeileder kun kan foreslå<br />ytelser/tjenester du kan ha krav på. For å få endelig svar<br />må du sende inn en søknad.</p>
      </div>
  
      <div className="flex flex-wrap gap-2">
        <Link to='/info'>
          <Button variant="primary">Start veilederen</Button>
        </Link>
        <Button variant="secondary">Få help med veilederen</Button>
      </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
      </div>
  
  
  );

  export default Home;