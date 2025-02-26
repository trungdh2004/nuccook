import { appConfig } from "@/config/appConfig";
import instance from "@/utils/instance";
import axios from "axios";

export const uploadMultiple = (form:FormData) => instance.post("/upload/multiple",form);

export const uploadSinger = (
	data: FormData,
	width?: number,
	height?: number,
) => {
	// const uri = `${appConfig.SERVER_URL}/upload/single${width || height ? `?${width ? `width=${width}` : ""}${width && height ? "&" : ""}${height ? `height=${height}` : ""}` : ""}`;
	const uri = `${appConfig.SERVER_URL}/upload/single${width || height ? `?${width ? `width=${width}` : ""}${width && height ? "&" : ""}${height ? `height=${height}` : ""}` : ""}`;
	return axios.post( uri, data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export const apiRemoveFile = (fileName:string) => instance.delete("/upload/remove?filename=" + fileName);
