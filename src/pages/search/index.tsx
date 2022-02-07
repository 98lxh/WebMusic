import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchMuisc_BBBUG } from "../../service/module/bbbug/module/search";
import { formatDate } from "../../utils/format-utils";
import { ColumnType } from "antd/lib/table";

import "./index.less";
import { useDispatch } from "react-redux";
import { getSongDetailAction } from "../player/store/actionCreators";

const Search: React.FC = memo(() => {
  const param = useParams();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    searchMuisc_BBBUG(param.keyword!).then((res) => {
      setDataSource(res.data);
      setLoading(false);
    });
  }, [param, setLoading]);

  const column: ColumnType<any>[] = [
    {
      title: "歌名",
      key: "name",
      align: "center",
      width: "10rem",
      ellipsis: { showTitle: true },
      dataIndex: "name",
    },
    {
      title: "封面",
      width: 100,
      align: "center",
      render: (_: any, r: any) => {
        return (
          <img
            style={{ width: "2.5rem" }}
            src={
              r.pic === "https://bbbug.hamm.cn//new/images/logo.png"
                ? "/imgs/ico/bbbug.ico"
                : r.pic
            }
          ></img>
        );
      },
    },
    {
      title: "歌手",
      key: "singer",
      align: "center",
      ellipsis: true,
      dataIndex: "singer",
    },
    {
      title: "时长",
      render: (_: any, r: any) => {
        return <p className="search-table-dt">{formatDate(r.length * 1000)}</p>;
      },
    },
    {
      title: "操作",
      width: 100,
      align: "center",
      fixed: "right",
      render: (_: any, r: any) => {
        return (
          <div className="search-table-handle">
            <CaretRightOutlined
              onClick={() => dispatch(getSongDetailAction(r.mid, "bbbug", r))}
            />
            <PlusOutlined />
          </div>
        );
      },
    },
  ];
  return (
    <div className="search-wrapper">
      <Table
        scroll={{ x: 800 }}
        pagination={{ position: ["topRight", "bottomCenter"] }}
        columns={column}
        dataSource={dataSource}
        loading={loading}
      ></Table>
    </div>
  );
});

export default Search;
