import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";

const TopSellers = () => {
  const [getdata, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function GetData() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
      );
      setGetData(data);
      setLoading(false);
    }
    GetData();
  }, []);

  if (loading) {
    return (
      <section id="section-popular" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Top Sellers</h2>
                <div className="small-border bg-color-2"></div>
              </div>
              <div className="col-md-12">
            <ol className="author_list">
            {new Array(12).fill(0).map((_, index) => (
                <li key={index}>
                  <div className=" Container-gray">
                    <Link to="/author">
                      <div
                        className="lazy pp-author gray-background-image"
                        src={AuthorImage}
                        alt=""
                      ></div>
                      <i className="fa fa-check"></i>
                    </Link>
                  
                  <div className="author_list_info gray-background-nameauthor">
                    <Link to="/author"></Link>
                    <span></span>
                  </div></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
            </div>
          </div>
      </section>
    );
  }

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {getdata.map((elem) => (
                <li key={elem.id}>
                  <div className="author_list_pp">
                    <Link to="/author">
                      <img
                        className="lazy pp-author"
                        src={elem.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to="/author">{elem.authorName}</Link>
                    <span>{elem.price}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
