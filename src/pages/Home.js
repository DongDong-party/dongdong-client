import React from "react";
import StoreApi from "../api/StoreApi";

class Home extends React.Component {
  state = {
    isLoading: true,
    stores: [],
  };

  async componentDidMount() {
    const { data } = await StoreApi.getList();
    this.setState({ stores: data, isLoading: false });
  }

  render() {
    const { isLoading, stores } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"></span>
          </div>
        ) : (
          <div className="stores">
            {stores.map((store) => {
              return <p>{store.name}</p>;
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
