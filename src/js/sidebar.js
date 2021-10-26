import {dataSidebar} from "../data/dataSidebar";

export const sidebar = {
	view: "sidebar",
	css: "webix_dark darkSidebar",
	select: true,
	minWidth: 150,
	maxWidth: 320,
	data: dataSidebar,
	ready() {
		const id = this.getFirstId();
		this.select(id);
	}
};
