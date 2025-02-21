import React from "react";

const Client = async () => {
  console.log("client", typeof window);

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000);
  // });

  return <div>client</div>;
};

export default Client;
