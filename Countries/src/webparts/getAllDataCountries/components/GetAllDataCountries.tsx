import * as React from 'react';
import styles from './GetAllDataCountries.module.scss';
import { IGetAllDataCountriesProps } from './IGetAllDataCountriesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Button, Card, Row, Col } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import $ from 'jquery';

export default class GetAllDataCountries extends React.Component<IGetAllDataCountriesProps, {}> {

  state = {
    countries: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
        console.log(countries);
      })
      .catch(e => {
        //console.log(e);
      })
  }



  public render(): React.ReactElement<IGetAllDataCountriesProps> {


    return (
      <div className="cards-countrie">
        <div className="row">

          {this.state.countries.map(countrie =>


            <div className="col s12 m6">
              <div className={`${styles['card']} card`}>
                <div className={`${styles['card-image']} card-image`}>
                  <img src={countrie.flags.png} className={styles['imgCard']} />
                </div>
                <div className="card-content">
                  <h5 className={styles.countrieName}>{countrie.name.common}</h5>
                  <a href="#" className="waves-effect waves-light btn" onClick={()=>this.ShowModal(countrie.name.common,countrie.name.official,countrie.population,countrie.region, countrie.subregion)}>Ver más</a>
                </div>
              </div>
            </div>


          )}
        </div>
      </div>
    );

  }

  ShowModal(nomprePais,nombreOficial,poblacion,region,subRegion)
{  
  alert(
    'Información Adicional del pais de '+nomprePais+': \n\n' 
    + "Nombre Oficial: "+ nombreOficial +"\n" 
    + "Población: "+ poblacion +"\n" 
    + "Región: "+ region +"\n" 
    + "Sub Región: "+ subRegion +"\n" 
  );  
}

ShowModal2(nomprePais,nombreOficial,poblacion,region,subRegion){
  $('<div id="modalCountries" class="modal"><div class="modal-content"><h4>Información Adicional del pais de '+nomprePais+'</h4><ul><li>Nombre Oficial: '+nombreOficial+'</li><li>Población: '+poblacion+'</li><li>Región: '+region+'</li><li>Sub Región: '+subRegion+'</li></ul></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat">Aceptar</a></div></div>').modal();
}

}
