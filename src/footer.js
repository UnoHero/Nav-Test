import React from "react";
import ScrollToTop from "./scrollToTop";
import "./App.css";


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid-container">
          <div className="column-1">
            <ScrollToTop />
      
            <h1>Kontaktinformasjon</h1>
            <p>
              <a href="https://www.nav.no/kontaktoss">Kontakt Oss</a>
            </p>
            <p>
              <a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/nav-i-ditt-fylke">
                NAV i ditt fylke
              </a>
            </p>
            <p>
              <a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kurs-fra-nav">
                Kurs fra NAV
              </a>
            </p>
            <p>
              <a href="https://www.nav.no/person/kontakt-oss/nb/tilbakemeldinger/">
                Klage, tilbakemelding, ros
              </a>
            </p>
          </div>
          <div className="footer-column">
            <h1>Nyheter og presse</h1>
            <p>
              <a href="https://www.nav.no/samarbeidspartner/presse">
                Nyheter, pressemeldinger og pressekontakt
              </a>
            </p>
          </div>
          <div className="footer-column">
            <h1>Andre språk</h1>
            <p>
              <a href="https://www.nav.no/en/home">English</a>
            </p>
            <p>
              <a href="https://www.nav.no/person/bestilling-av-samisk-samtale">
                Samegialla
              </a>
            </p>
            <p>
              <a href="https://www.nav.no/no/nav-og-samfunn/om-nav/personvern-i-arbeids-og-velferdsetaten">
                Personvern og informasjonskapsler
              </a>
            </p>
            <p>
              <a href="https://www.nav.no/tilgjengelighet">Tilgjengelighet</a>
            </p>
            <p>
              <a href="https://www.nav.no/#">Del skjerm med veileder</a>
            </p>

            
            <h1 className='h1-column-2-3'>Nyheter og presse</h1>
            <p className='p-footer'><a href="https://www.nav.no/samarbeidspartner/presse">Nyheter, pressemeldinger og pressekontakt</a></p>
            <br/>
            <br/>
            <h1 className='h1-column-2-3'>NAV og samfunn</h1>
            <p className='p-footer'><a href="https://www.nav.no/no/nav-og-samfunn/statistikk-analyse-og-fou">Statistikk, analyse og FoU</a></p>
            <p className='p-footer'><a href="https://lovdata.no/nav/">Lover og regler</a></p>
            <p className='p-footer'><a href="https://www.nav.no/no/nav-og-samfunn/om-nav/om-nav">Om NAV</a></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
