import React from "react";
 import littleFerry from "./littleFerry.jpg";
function Home() {
  return (
    <div className="home">
      <figure>
        <img src={littleFerry} alt="Little Ferry School" />
      </figure>
      <article>
        <h3>Welcome to Little Ferry, NJ</h3>
        <div className="content">
          <p>
            Located a stones throw from NYC, Little Ferry is a tight-knit
            suburban community of parks, close proximity to numerous shopping
            venues and down the street from the Meadowlands. Home to "nature at
            its best" with a bird sanctuary, the trails & birding of the Losen
            Slote Creek Park, fishing at Lakeview Park or visiting any of our
            pocket parks, there is something for everyone. Come visit our
            eateries, their diversity will keep you coming back for more. If you
            are a business looking to open or expand in the Borough, our
            business friendly attitude, close proximity to area highways and a
            large "greater Little Ferry" population base presents an inviting
            opportunity for business success. Explore our new website, launched
            February of 2013, you will find information on the Borough and our
            services. Please do not hesitate to contact any staff with any
            questions you may have. Thanks for visiting!
          </p>
            <img src={littleFerry} /> 

          
        </div>
      </article>
    </div>
  );
}

export default Home;



