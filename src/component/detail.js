import { useParams } from "react-router-dom";

function Detail(props) {

  let {id} = useParams();

  return (
    <div>
      <img className="lst-img" src={"/img/img" + id + ".png"} />
      <h4>{props.pockList[id].title}</h4>
      <h4>{props.pockList[id].content}</h4>
      <h4>{props.pockList[id].price}</h4>
    </div>
  );
}


export default Detail;
