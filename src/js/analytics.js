import {dataAnalytics} from "../data/dataAnalytics";

export const analytics = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Analytics"
				},
				{}
			]
		},
		{
			type: "clean",
			rows: [
				{
					height: 38,
					template: "<span class='subTitle strong'>Satisfaction of Trips</span>"
				},
				{
					view: "chart",
					minWidth: 200,
					type: "spline",
					offset: 0,
					padding: {top: 25, left: 15},
					xAxis: {
						template: "#trip#"
					},
					yAxis: {
						template: "",
						start: 0,
						end: 10,
						step: 5
					},
					legend: {
						values: [
							{text: "Previous month", color: "#2DD4FF"},
							{text: "This month", color: "#2FC0C6"}
						],
						marker: {type: "round", width: 6, height: 6},
						valign: "top",
						align: "left",
						width: 90,
						layout: "x"
					},
					series: [
						{
							value: "#value#",
							item: {
								borderColor: "#2FC0C6",
								color: "#2FC0C6",
								radius: 2
							},
							line: {
								color: "#2FC0C6"
							}
						},
						{
							value: "#value2#",
							item: {
								borderColor: "#2DD4FF",
								color: "#2DD4FF",
								radius: 2
							},
							line: {
								color: "#2DD4FF"
							}
						}
					],
					data: dataAnalytics
				}
			]
		}
	]
};
