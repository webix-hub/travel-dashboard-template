import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {userMenu} from "./js/userMenu";
import {topbar} from "./js/topbar";
import {upcomingTrips} from "./js/upcomingTrips";
import {tickets} from "./js/tickets";
import {bookingHistory} from "./js/bookingHistory";
import {analytics} from "./js/analytics";
import {travelMap} from "./js/travelMap";
import "./js/headerCheckbox";

// SCSS
import "./styles/main.scss";


webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		css: "bgLight",
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						type: "space",
						rows: [
							topbar,
							{
								margin: 10,
								cols: [
									{
										maxWidth: 568,
										minWidth: 528,
										margin: 10,
										rows: [
											upcomingTrips,
											tickets
										]
									},
									{
										margin: 10,
										rows: [
											bookingHistory,
											{
												height: 306,
												margin: 10,
												cols: [
													travelMap,
													analytics
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	});

	webix.ui(userMenu);
});
