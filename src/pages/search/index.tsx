import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSongDetailAction } from "../player/store/actionCreators";
import { useParams } from "react-router";
import { searchMuisc_BBBUG } from "../../service/module/bbbug/module/search";
import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { ColumnType } from "antd/lib/table";

import { formatDate } from "../../utils/format-utils";
import "./index.less";

const Search: React.FC = memo(() => {
  const param = useParams();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flag) {
      setLoading(true);
      searchMuisc_BBBUG(param.keyword!).then((res) => {
        setDataSource(res.data);
        setLoading(false);
      });
    }
    return () => {
      setFlag(false);
    };
  }, [param, setLoading, flag]);

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
      key: "pic",
      render: (_: any, r: any) => {
        return (
          <img
            style={{ width: "2.5rem" }}
            src={
              r.pic === "https://bbbug.hamm.cn//new/images/logo.png"
                ? "/imgs/ico/bbbug.ico"
                : r.pic
            }
            alt=""
          />
        );
      },
    },
    {
      title: "歌手",
      key: "singer",
      width: 200,
      align: "center",
      ellipsis: true,
      dataIndex: "singer",
    },
    {
      title: "时长",
      key: "length",
      width: 100,
      render: (_: any, r: any) => {
        return <p className="search-table-dt">{formatDate(r.length * 1000)}</p>;
      },
    },
    {
      title: "操作",
      width: 80,
      align: "center",
      key: "index",
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
        pagination={{ position: ["bottomCenter"] }}
        columns={column}
        dataSource={dataSource}
        loading={loading}
      />
    </div>
  );
});

export default Search;
