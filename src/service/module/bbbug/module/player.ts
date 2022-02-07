import service from "../service";

export const getLRC_BBBUG = (id: number) => {
  return service.request({
    url: "/song/getLrc",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      plat: "pc",
      version: 10000,
      mid: id,
    }),
  });
};
