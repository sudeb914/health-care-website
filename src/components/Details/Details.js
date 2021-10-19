import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const foundDetail = details.find((detail) => detail.id === id);
  console.log(foundDetail);

  return (
    <div>
      {/* <h2>id {foundDetail?.name}</h2> */}
      <div className="m-2">
        <div class="card single-card">
          <img
            className="img-service"
            src={foundDetail?.img}
            className="w-50"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{foundDetail?.name}</h5>
            <p class="card-text">{foundDetail?.discription}</p>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
