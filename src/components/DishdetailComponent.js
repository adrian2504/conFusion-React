import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


  
    function RenderDish( {dish} ) {
        if(dish == null){
            return(<div></div>);
        }
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />                    
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments( {comments} ){
        if(comments == null){
            return(<div></div>);
        }
        const showcmnts = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(cmnt.date))}
                    </p>
                </li>
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {showcmnts}
                </ul>
            </div>
        );
    }

    const DishDetail = (props) => {

        console.log('Dishdetail component render invoked');

        const dish = props.dish;
        if(dish == null){
            return(<div></div>);
        }
       // const dishItem = this.renderDish(dish);
        //const dishComments = this.renderComments(dish.comments);
      ////  const dishItem = <RenderDish dish={props.dish} />
       //// const dishComments =  <RenderComments comments = {props.dish.comments} />
         return(

            <div className='container'>
                <div className='row'>
                     <Breadcrumb>
                        
                        <BreadcrumbItem><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>   
                <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    
                    {/* 
                    {dishItem}
                    {dishComments}
                    <RenderDish dish={props.dish} />
                    <RenderComments comments = {props.dish.comments} /> */}
                </div>
            </div>
        );
    }


export default DishDetail;