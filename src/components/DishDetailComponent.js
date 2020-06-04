import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderDish({dish}) {
    
    if (dish != null) {
        return (

            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>

        );

    } else {
        return (<div></div>);
    }

  }

  function RenderComments({comm}) {
    
    if (comm == null) {
        return (<div></div>)
    }
 return( 
  <Card>
      <CardTitle><h4>Comments:</h4></CardTitle>
      <CardBody>
          {comm}
      </CardBody>
  </Card>
 );
    
  }

  const  DishDetail = (props) => {
    const dish = props.dish;
    if(dish==null) {
        return (<div></div>);
    }
    const lst= props.comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
        );
    });
   
   

    return (
        <div className="container">
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        <div className="row">
            <div className="col-12 col-md-5 mt-1">
                <RenderDish dish={dish}></RenderDish>
            </div>
            <div className="col-12 col-md-5 mt-1">
            <RenderComments comm={lst}></RenderComments>
            </div>
        </div>
        </div>


    );
    
    
}

export default DishDetail;