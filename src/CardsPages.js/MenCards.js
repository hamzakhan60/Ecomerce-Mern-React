import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import Card from '../Card';
import axios from 'axios';
import { UserSearch } from "../context/userContext";
import Loading from '../Loading';

const MenCards = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mensData, setMensData] = useState([]);
  const { userSearch } = useContext(UserSearch);
  const [products, setProducts] = useState([]);

  const url = `${process.env.REACT_APP_base_Url}/collection/ForMen`;
  console.log("API URL:", url);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setMensData(Array.isArray(response.data) ? response.data : []);
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    if (userSearch) {
      const handleSearch = () => {
        const filtered = products.filter((product) => {
          const lowerProductName = product.ProductName.toLowerCase();
          const lowerSubCategory = (product.clothId && product.clothId.SubCategory.toLowerCase()) || (product.fragranceId && product.fragranceId.SubCategory.toLowerCase());
          return (
            lowerProductName.includes(userSearch.toLowerCase()) ||
            lowerSubCategory.includes(userSearch.toLowerCase())
          );
        });
        setMensData(filtered);
      };
      handleSearch();
    } else {
      setMensData(products);
    }
  }, [userSearch, products]);

  const handleImageChange = (index) => {
    setHoveredIndex(index);
  };

  if (!mensData.length) {
    return <Loading />;
  } else {
    return (
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mensData.map((card, index) => {
          const clothItem = card.clothId;
          const fragranceItem = card.fragranceId;
          const imageSrc = (clothItem && clothItem.imgUrl) || (fragranceItem && fragranceItem.imgUrl);
          const cutPrice = card.Price + 500;
          const category = clothItem ? clothItem.StitchType : (fragranceItem ? fragranceItem.family : "N/A");

          return (
            <div key={card._id} className="relative">
              <Link to={`/details/${card._id}`}>
                <Card
                  imageSrc={imageSrc}
                  cardName={card.ProductName}
                  category={category}
                  cutPrice={cutPrice}
                  originalPrice={card.Price}
                  discount={20}
                />
              </Link>
              <div className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer">
                <AiOutlineHeart className="text-red-500 " />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default MenCards;
