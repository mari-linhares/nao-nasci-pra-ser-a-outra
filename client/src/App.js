import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from "react-vis";
import GraficoBarras from "./components/visualizacoes/GraficoBarras";
import GraficoPontos from "./components/visualizacoes/GraficoPontos";
import LineChart from './components/visualizacoes/GraficoLinhas'
import LineChartData from './data.json'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import VotosVSInvestimentos from "./components/visualizacoes/VotosVSInvestimentos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row part1">
            <div className="bg col-md-12 col-xs-12 col-12 col-sm-12"></div>
                <div className="col-md-6 col-xs-6 col-12 col-sm-12">
                  <div className="left-container">
                    <span className="blink_me">30%</span>
                    <h3>
                    </h3>
                    <img src={require("./img/img-left-part1.png")} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-6 col-12 col-sm-12 right-container">
                  <img src={require("./img/logo.png")} />
                  <h3>
                    O Não Nasci Pra Ser a Única oferece uma maneira fácil de monitorar o cumprimento efetivo da <a href='http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Lei/L12034.ht'>lei 12.034/2009, </a> a qual exige que haja no mínimo de 30% e o máximo de 70% de candidatos de cada sexo em eleições proporcionais.
                  </h3>
                </div>
          </div>
          <div className="row part2">
            <div className="col-md-12 col-xs-12 col-12 col-sm-12">
              <GraficoBarras />
            </div>
            <div className="col-md-12 col-xs-12 col-12 col-sm-12 container-part2">
              <div className="row">
                  <div className="col-md-6 col-xs-6 col-12 col-sm-12 text1-part2">
                    <div>
                      <span className="blink_me">30%</span><h3>Lorem Ipsum dollor sit amet</h3>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-6 col-12 col-sm-12 text2-part2">
                      <h3>Pesquisa quantitativa não probabilística. Formulário respondido no Google Docs e compartilhado organicamente entre mulheres que trabalham em agência de publicidade</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row partItalo">
            <h1 className="col-md-12 col-xs-12 col-12 col-sm-12">
              Lorem Ipsum dollor sit amet
            </h1>
            <div className="col-md-8 col-xs-8 col-12 col-sm-12">
              <LineChart data={LineChartData} size={[520,520]} />
            </div>
            <div className="col-md-4 col-xs-4 col-12 col-sm-12 text-part3">
              <div>
                <div className="row">
                  <span>30%</span>
                  <div className="ajuste-porcent-sub">
                    <h3>Lorem Ipsum dollor sit amet</h3>
                  </div>
                </div>
                <h3>
                  Pesquisa quantitativa não probabilística. Formulário
                  respondido no Google Docs e compartilhado organicamente entre
                  mulheres que trabalham em agência de publicidade
                </h3>
              </div>
            </div>
          </div>
          <div className="row part4">
            <h1 className="col-md-12 col-xs-12 col-12 col-sm-12">
              Lorem Ipsum dollor sit amet
            </h1>
            <div className="col-md-12 col-xs-12 col-12 col-sm-12">
              <div className="row row-ranking">
                <div className="col-md-4 col-xs-4 col-12 col-sm-12">
                    <div className="row rr-1">
                      <div className="rr1-img-part">
                        <img src={require("./img/s1.svg")} />
                      </div>
                      <div className="rr1-partido">
                        <p className="nomepartido">PSDB</p>
                        <span className="ttpartido"><i class="fab fa-twitter"></i>PSDB</span>
                      </div>
                    </div>
                    <div className="card">
                      <div className="row rr-2">
                        <div className="ghost-size">
                          <img src={require("./img/pac-man-ghost.svg")} />
                        </div>
                        <div className="nota"><h3>321 candidatas fantasmas</h3></div>
                      </div>
                      <div className="botao">
                        <div className="denuncia">
                          <p>Exija explicações!<i class="fab fa-twitter"></i></p>
                        </div>
                      </div>
                  </div>
                </div>

                 <div className="col-md-4 col-xs-4 col-12 col-sm-12">
                    <div className="row rr-1">
                      <div className="rr1-img-part">
                        <img src={require("./img/s2.svg")} />
                      </div>
                      <div className="rr1-partido">
                        <p className="nomepartido">PSDB</p>
                        <span className="ttpartido"><i class="fab fa-twitter"></i>PSDB</span>
                      </div>
                    </div>
                    <div className="card">
                      <div className="row rr-2">
                        <div className="ghost-size">
                          <img src={require("./img/pac-man-ghost.svg")} />
                        </div>
                        <div className="nota"><h3>321 candidatas fantasmas</h3></div>
                      </div>
                      <div className="botao">
                        <div className="denuncia">
                          <p>Exija explicações!<i class="fab fa-twitter"></i></p>
                        </div>
                      </div>
                  </div>
                </div>

            <div className="col-md-4 col-xs-4 col-12 col-sm-12">
                    <div className="row rr-1">
                      <div className="rr1-img-part">
                        <img src={require("./img/s3.svg")} />
                      </div>
                      <div className="rr1-partido">
                        <p className="nomepartido">PSDB</p>
                        <span className="ttpartido"><i class="fab fa-twitter"></i>PSDB</span>
                      </div>
                    </div>
                    <div className="card">
                      <div className="row rr-2">
                        <div className="ghost-size">
                          <img src={require("./img/pac-man-ghost.svg")} />
                        </div>
                        <div className="nota"><h3>321 candidatas fantasmas</h3></div>
                      </div>
                      <div className="botao">
                        <div className="denuncia">
                          <p>Exija explicações!<i class="fab fa-twitter"></i></p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row part3">
            <h1 className="col-md-12 col-xs-12 col-12 col-sm-12">Lorem Ipsum dollor sit amet</h1>
            <div className="col-md-6 col-xs-6 col-12 col-sm-12">
                <div className="left-container">
                   <span className="blink_me">30%</span><h3>Lorem Ipsum dollor sit amet</h3>
                    <img src={require("./img/dilmae.gif")} />
                </div>
            </div>
            <div className="col-md-6 col-xs-6 col-12 col-sm-12 ajust-margin">
                <div className="colaborartext">
                  <div className="row">
                    <div className="megaphonediv"><img src={require("./img/megaphone.svg")} /></div>
                    <p className="ajust-margin2 blink_me">Como colaborar?</p>
                  </div>
                    <h3>Pesquisa quantitativa não probabilística. Formulário respondido no Google Docs e compartilhado organicamente entre mulheres que trabalham em agência de publicidade</h3>
                </div>
            </div>
          </div>
          <div className="row part6">
            <img className="ajust-img-pocs" src={require("./img/bob.jpg")} />
            <img className="ajust-img-pocs" src={require("./img/dan.jpg")} />
            <img className="ajust-img-pocs" src={require("./img/hadri.jpg")} />
            <img className="ajust-img-pocs" src={require("./img/italo.jpg")} />
            <img className="ajust-img-pocs" src={require("./img/jair.jpg")} />
            <img className="ajust-img-pocs" src={require("./img/mari.jpg")} />
            <img className="ajust-img-pocs" src={require("./img/vini.jpg")} />
            <div className="col-md-12 col-xs-12 col-12 col-sm-12 row logo-footer">
              <img className="logo-hack" src={require("./img/hackfest.svg")} />
              <img className="logo-nossa" src={require("./img/logo.png")} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
