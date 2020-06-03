import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
    const dish = props.selectedDish;
    if(dish==null) {
        return (<div></div>);
    }
    const lst= dish.comments.map(comment => {
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
        <div className="row">
            <div className="col-12 col-md-5 mt-1">
                <RenderDish dish={dish}></RenderDish>
            </div>
            <div className="col-12 col-md-5 mt-1">
            <RenderComments comm={lst}></RenderComments>
            </div>
        </div>


    );
    
    
  }

export default DishDetail;