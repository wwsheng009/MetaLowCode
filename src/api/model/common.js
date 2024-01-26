import config from "@/config"
import http from "@/utils/request"

export default {
	upload: {
		url: `file/upload`,
		name: "文件上传",
		post: async function(data, config={}){
			return await http.post(this.url, data, config);
		}
	},
	uploadFile: {
		url: `file/uploadFile`,
		name: "附件上传",
		post: async function(data, config={}){
			return await http.post(this.url, data, config);
		}
	},
	exportFile: {
		url: `file/fileExport`,
		name: "导出附件",
		get: async function(data, config={}){
			return await http.get(this.url, data, config);
		}
	},
	importFile: {
		url: `file/fileImport`,
		name: "导入附件",
		post: async function(data, config={}){
			return await http.post(this.url, data, config);
		}
	},
	file: {
		menu: {
			url: `file/menu`,
			name: "获取文件分类",
			get: async function(){
				return await http.get(this.url);
			}
		},
		list: {
			url: `file/list`,
			name: "获取文件列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		}
	}
}
