import React, { useState, useEffect } from 'react';

import ImageLoader from '../modules/image-loader';
import StoreApi from '../api/store-api';
import '../assets/scss/components/store_list.scss';

function StoreItem({ store }) {
  return (
    <div className="store-component-details">
      <div className="store-image-section">
        <img
          className="store-cover-image"
          src={
            ImageLoader.getPath() +
            '2cb5912e-82ec-437c-992f-54750aadfebcKakaoTalk_Photo_2020-07-17-14-29-52.png'
          }
          alt=""
        />
      </div>
      <div className="store-info-section">
        <div className="store-info-base">
          <h1 className="store-name">{store.name}</h1>
          <p>{store.address.city}</p>
          <p>{store.category}</p>
          <p>{store.description}</p>
        </div>
        <div className="store-info-etc"></div>
      </div>
    </div>
  );
}

function StoreList({ query }) {
  // console.log(query);
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const init = async () => {
      try {
        setStoreList(null);
        setLoading(true);
        setError(null);

        const { data } = await StoreApi.getData(query);
        setStoreList(data);
      } catch (e) {
        setLoading(true);
        setError(e);
        setStoreList(null);

        console.log(e);
      }
      setLoading(false);
    };
    init();
  }, [query]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!storeList) return null;

  return (
    <div className="store-wrapper">
      {storeList.map((store) => {
        return <StoreItem key={store.storeId} store={store} />;
      })}
    </div>
  );
}

export default StoreList;
