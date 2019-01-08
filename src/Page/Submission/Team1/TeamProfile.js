// Sherman Grewal
// Oliver Lingertat
// Luncy Cheng
// Navya Mehta

import React, { Component } from 'react';
import StockStats from '../../../Data/stocks';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Jumbotron,Button } from 'reactstrap';
import "./style.css";



class TeamProfile extends Component {
  
  render() {

    return (
    <div className='container'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"/>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"/>
    <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"/>
    <link href="style.css" rel="stylesheet"/>

      

   <Jumbotron>
      <h1>Two Alpha's Team</h1>
      <div class='container2-fluid padding'>
        <div class="row padding">
                <div class="col-lg-4">
                    <div class="card">
                    <div class="container2">
                        <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB"
                        class="image card-img-top"></img>
                        <div class="overlay overlayFade">
                            <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
                        </div>
                    </div>
                        <div class="card-body">
                            <h4 class="card-title">Sherman Grewal</h4>
                            <p class="card-text">Software Developer</p>
                                <div class = "team-social">
                                    <a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
                                    <a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" >
                    <div class="container2">
                        <img src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.15752-0/p280x280/46480301_560467854377260_1744096265110552576_n.jpg?_nc_cat=105&_nc_ht=scontent.fyto1-1.fna&oh=a37321acbff527f633a83131fe90767b&oe=5C83A6C5"
                  class="image card-img-top"></img>
                        <div class="overlay overlayFade">
                            <div class="text">As an avid tech enthusiast, voracious reader, and passionate public speaker, Navya has continuously immersed himself in the realm of financial technologies, quantitative trading and econometrics. He believes that data science holds the power to truly shape human behaviour and structure the unstructured: a belief that manifests in his resolute commitment for data-driven financial architecture and high-frequency-trade systems. A foodie by the day and binge-watcher by the night, Navya is knowledgeable about everything Suits and Brooklyn 99 - a raw elemental passion that he brings to the table in his investment endeavours.</div>
                        </div>
                    </div>
                        <div class="card-body">
                            <h4 class="card-title">Navya Mehta</h4>
                            <p class="card-text">Software Developer</p>
                                <div class = "team-social">
                                    <a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
                                    <a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div class='container2-fluid padding'>
        <div class="row padding">
                <div class="col-lg-4">
                    <div class="card" >
                    <div class="container2">
                        <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB"
                        class="image card-img-top"></img>
                        <div class="overlay overlayFade">
                            <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
                        </div>
                    </div>
                        <div class="card-body">
                            <h4 class="card-title">Sherman Grewal</h4>
                            <p class="card-text">First Year Associate</p>
                                <div class = "team-social">
                                    <a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
                                    <a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" >
                    <div class="container2">
                        <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/45558016_197398521155129_5335448614086901760_n.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=779585b3f66e7b3621f6e94f7951a2e3&oe=5C68CDFB"
                        class="image card-img-top"></img>
                        <div class="overlay overlayFade">
                            <div class="text">Sherman Grewal is a first year Computing and Financial Management student at the University of Waterloo. With hEDGE being Sherman’s first official step into the world of finance, Sherman is looking forward to applying his knowledge in computer science to the finance world. Sherman hopes to bring a new aspect to the team with his knowledge in software development and interest in the fintech sector. Sherman enjoys working out and playing basketball during his free time, as well as working on his current software projects.</div>
                        </div>
                    </div>
                        <div class="card-body">
                            <h4 class="card-title">Sherman Grewal</h4>
                            <p class="card-text">First Year Associate</p>
                                <div class = "team-social">
                                    <a href="https://www.linkedin.com/in/sherman-grewal/"><i class="fab fa-linkedin"></i></a>
                                    <a href="mailto:s.grewal@hedgeconference.ca"><i class="fab fa-google"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Jumbotron>
        </div>
    )
  }
}

export default TeamProfile;
