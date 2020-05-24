import React,{Component} from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

import DishDetailComponent from './DishDetailComponent';
class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
                selectedDish:null,
                
        };
        
    
    }
     onDish(dish){
         this.setState({selectedDish:dish});
     }

     
    render(){
        
       
        const menu=this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                  <Card onClick={()=>this.onDish(dish)}>
                    
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    
                        <CardImgOverlay className="ml-5">
                      <CardTitle>{dish.name}</CardTitle> 
                    </CardImgOverlay>
                   
                  </Card>
                </div>
              );
        });
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                
                        <DishDetailComponent selectedDish={this.state.selectedDish}></DishDetailComponent>    
                

            </div>
        );
    }
}

export default Menu;