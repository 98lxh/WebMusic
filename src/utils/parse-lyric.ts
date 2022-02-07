const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export interface ILyric {
  content: string;
  time: number;
}
export const parseLyric = (lyric: any, origin: string) => {
  switch (origin) {
    case "netease":
      return parseLyric_netease(lyric);
    default:
      return parseLyric_bbbug(lyric);
  }
};

const parseLyric_netease = (lyricString: string) => {
  const lineStrings = lyricString.split("\n");
  const lyricList: ILyric[] = [];
  for (let line of lineStrings) {
    if (line) {
      const result: any = parseExp.exec(line);
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      lyricList.push({
        time,
        content,
      });
    }
  }
  return lyricList;
};

const parseLyric_bbbug = (lyric: any) => {
  const lyricList: ILyric[] = [];
  for (let line of lyric) {
    lyricList.push({
      time: line.time * 1000,
      content: line.lineLyric,
    });
  }
  return lyricList;
};
