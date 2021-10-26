import {dataTravelMap} from "../data/dataTravelMap";

export const travelMap = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Travel Map"
				},
				{}
			]
		},
		{
			view: "geochart",
			key: "AIzaSyABYdmoHVJuEBv-jWcbG-w_8HPRwRqTIe4",
			chart: {
				defaultColor: "#8664C6"
			},
			data: dataTravelMap
		}
	]
};
