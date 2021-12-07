import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const loading = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = ({ initialLoading, children }) => {
	return initialLoading ? (
		<Spin style={loading} indicator={antIcon} />
	) : (
		<>{children}</>
	);
};

export default Loader;
