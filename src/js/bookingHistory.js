import {dataHistory} from "../data/dataHistory";

export const bookingHistory = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10, right: 10, top: 4, bottom: 4},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Booking History"
				},
				{},
				{
					view: "richselect",
					css: "filter",
					label: "<span class='mdi mdi-filter'></span>",
					labelWidth: 18,
					width: 88,
					icon: "mdi mdi-menu-down",
					placeholder: "Filters",
					options: {
						view: "suggest",
						fitMaster: false,
						width: 100,
						body: {
							view: "list",
							css: "filterList",
							data: [
								{id: 1, value: "<span class='webix_light'>Reset</span>", $empty: true},
								{id: 2, value: "Filter 1"},
								{id: 3, value: "Filter 2"}
							]
						}
					}
				}
			]
		},
		{
			view: "datatable",
			css: "bookingHistory webix_data_border webix_header_border",
			type: {
				customCheckbox(obj, common, value) {
					if (value) return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-marked"></span>';
					return '<span class="webix_table_checkbox customIcon mdi mdi-24px mdi-checkbox-blank-outline"></span>';
				},
				cityTemplate(obj) {
					return `
						<div class="flex cityTemplate">
							<div class="cityImage">
								<img src="${obj.image}" alt="${obj.city}" />
							</div>
							<span class="cityText strong">${obj.city}</span>
							<span class="cityText strong textLight"> (${obj.country})</span>
						</div>
					`;
				}
			},
			checkboxRefresh: true,
			columns: [
				{id: "ch1", header: {content: "masterCheckbox"}, template: "{common.customCheckbox()}", width: 41},
				{id: "city", header: "City", width: 202, template: "{common.cityTemplate()}"},
				{id: "date", header: "Date", width: 180, css: "smallTextCol", template: "#from# - #to#"},
				{id: "days", header: "Days", width: 64, css: "flexCol smallTextCol"},
				{id: "person", header: "Person", width: 70, css: "flexCol smallTextCol"},
				{id: "apartment", header: "Apartment", minWidth: 200, fillspace: true, css: "smallTextCol"},
				{id: "cost", header: "Cost", width: 58, css: "flexCol smallTextCol"}
			],
			rowHeight: 50,
			data: dataHistory
		}
	]
};
