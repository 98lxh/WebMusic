export function formatDate(time: number) {
  let date = new Date(time);
  let mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  // 这里修改返回时间的格式
  return mm + ":" + ss;
}
