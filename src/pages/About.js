import React, {Component} from "react";
import { Container
} from 'reactstrap';

class About extends Component {

	render(){
		return (
			<Container>
			<div className="about">
			 <img width="100%" height="auto" className="img-responsive" src="https://theme.hstatic.net/1000166699/1000637600/14/table-order-lobsterbay.jpg?v=90"  alt="logo" />
			     <div className="about-content">
			      	<h2 className="title heading">About</h2>
			      	<p>Lobster Bay trân trọng thông báo đến Quý Khách Hàng:</p>
			      	<p>  Lobster Bay phục vụ ăn uống tại nhà hàng từ 9h -22h mỗi ngày. Quý khách có nhu cầu dùng món tại nhà hàng có thể đặt bàn trước qua Hotline: 𝟏𝟗𝟎𝟎.𝟎𝟔𝟔.𝟔𝟗𝟎 của nhà hàng. </p>
			      	<p> Lobster Bay vẫn luôn phục vụ Quý Khách có nhu cầu đặt món mang về hoặc giao tận nơi có thể đặt món cho Lobster Bay qua hotline, inbox fanpage hoặc website: </p>
			      	<p> 𝟏/ 𝐇𝐨𝐭𝐥𝐢𝐧𝐞: 𝟏𝟗𝟎𝟎.𝟎𝟔𝟔.𝟔𝟗𝟎 | 𝟎𝟐𝟖. 𝟕𝟑𝟎𝟎.𝟔𝟔𝟗𝟎 </p>

			      	<img width="100%" height="auto" className="img-responsive" src="https://file.hstatic.net/1000166699/file/62561894_2290158814557358_6771885969374183424_o_257140466a5a4d40ae8d28edb62a44a7_1024x1024.jpg"  alt="logo" />

			      </div>
			  </div>	
			 </Container>
				);  
			}

		}

export default About;