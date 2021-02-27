import React, { Component } from "react";
import Slider from "react-slick";

import axios from 'axios';
import { Container, Row, Col,  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {


  constructor(props){
    super(props);

    console.log(props);
    this.state = {
      slick : []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8080/slick').then(res =>{
      this.setState({ 
        slick : res.data
      });
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    const { slick } = this.state;
    return (
      <Container>
      <div className="widget">
        <h2 className="widget-title"> 
          <span>
              Review
          </span>
        </h2>
        <Slider {...settings}>
          { slick.map(slick => (
            <Row>
              <div className="row item-testimonial">
                <Col key={slick.id} sm="6">
                    <div className="img-bd">
                        <img width="100%" height="auto" className="img-responsive" src={slick.imageUrl}  alt="logo" />
                    </div>
                </Col>
                <Col sm="6">
                    <div className="info-testimonial"> <p className="name">{slick.name}</p> <a href="">Chợ Đồn- Bắc kan</a> <p className="des">{slick.description}.</p> 
                    </div>
                </Col>
              </div>
            </Row>
          ))}
        </Slider>
      </div>
      </Container>
    );
  }
}

export default SimpleSlider;