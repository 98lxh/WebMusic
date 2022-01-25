import React, { useEffect } from "react";
import { getTopList } from "../../../../service/module/recommend";
const Ranking: React.FC = () => {
  useEffect(() => {
    getTopList(0).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Ranking</div>;
};

export default Ranking;
