import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="card w-25 p-3 m-5 me-3 mb-1">
      <Link to={`/detail/${prod.id}`}>
        <div className="card-header">{prod.name}</div>
        <div className="card-body">
          <center>
            <img src={prod.foto} className="w-50" />
          </center>
        </div>
        <div className="card-footer w-100">
          precio : $ {prod.price}
          <br></br>
          stock: {prod.stock}
        </div>
      </Link>
    </div>
  );
};

export default Item;
