import React, {Component} from "react";
import axios from 'axios';
import { Container, Row, Col,  Card, CardImg, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";



import Detail from './Detail';


class Products extends Component {

	constructor(props){
		super(props);

		console.log(props);
		this.state = {
			products : []
		};
	}

	componentDidMount(){
		axios.get('http://localhost:8080/products').then(res =>{
			this.setState({ 
				products : res.data
			});
		});
	}
	render(){

		const { products } = this.state;
		
		return (
			<Container>
			<div className="content">
			<div className="content-heading">
				<div className="avatar"></div>
				<h2 className="title-product"> Products </h2>
			</div>
			<div className="content-product">
			<Row>
			 { products.map(product => (
				<Col key={product.id} sm="3">
					<Card>
					
					<CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />	
					<CardBody>
						<CardTitle tag="h5">{product.name}</CardTitle>
						<CardText>{product.description}.</CardText>
						       <Button outline color="success">
								  <Link to={"/detail/" + product.id}>Detail</Link></Button>{' '}				         
				         <Switch>
				          <Route path="/:id" children={<Detail id={product.id} />}  />
				        </Switch>
				        
					</CardBody>
					</Card>
				</Col>	
				))}
				</Row>
			</div>
				</div>
				</Container>	

				);  
			}

		}

		export default Products;


