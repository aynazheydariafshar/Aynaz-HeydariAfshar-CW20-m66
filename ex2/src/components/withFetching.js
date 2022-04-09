import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function WithFetching(Component) {
  const WithFetchingComponent = ({ link, ...props }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
      setLoading(true);
      setError("");
      fetch(link)
      .then((json) => json.json())
        .then((res) => {
          console.log(res);
          setLoading(false);
          if (res) {
            setData(res);
          } else {
            setError("something went wrong try again");
          }
        });
      }, []);
      
      return <Component data={data} loading={loading} error={error} {...props} />;

    };
    
    WithFetchingComponent.propTypes = {
      link: PropTypes.string,
    };
    return WithFetchingComponent;
}
export default WithFetching;

