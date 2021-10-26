import {dataUpcomingTrips} from "../data/dataUpcomingTrips";

let slide = obj => `
	<div class="slideInner flex flexCol">
		<img src='${obj.src}' />
		<span class="slideTitle">${obj.title}</span>
	</div>
`;

export const upcomingTrips = {
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Upcoming Trips"
				},
				{}
			]
		},
		{
			view: "scrollview",
			body: {
				type: "clean",
				rows: [
					{
						view: "template",
						height: 352,
						css: "upcomingWrapp",
						template(obj) {
							let stars = [];
							for (let star = 0; star < 5; star++) {
								if (star < obj.rate) stars.push('<span class="mdi mdi-star starFull"></span>');
								else stars.push('<span class="mdi mdi-star starEmpty"></span>');
							}
							return `
								<div class="upcomingInner flex">
									<div class="upcomingInfo flex flexCol">
										<div class="upcomingRow">
											<span class="upcomingTitle strong">${obj.place} <span class="textLight">(${obj.country})</span></span>
										</div>
										<div class="upcomingRow">
											<span class="upcomingIcon mdi mdi-calendar-month mdi-18px"></span>
											<span class="upcomingRowText">${obj.from} - ${obj.to}</span>
										</div>
										<div class="upcomingRow">
											<span class="upcomingIcon mdi mdi-account mdi-18px"></span>
											<span class="upcomingRowText">${obj.person}</span>
										</div>
										<div class="upcomingRow">
											<span class="upcomingIcon mdi mdi-bed-king mdi-18px"></span>
											<span class="upcomingRowText">${obj.apartments}</span>
											<div class="rate">${stars.join("")}</div>
										</div>
										<div class="upcomingRow">
											<span class="upcomingIcon mdi mdi-cash mdi-18px"></span>
											<span class="upcomingRowText">
												${obj.cost} 
												<span class="textPale">(${obj.nights})</span>
											</span>
										</div>
										<div class="upcomingRow">
											<div class="upcomingRowText">
												${obj.description}
											</div>
										</div>
									</div>
									<div class="upcomingImg">
										<img src="${obj.image}" alt="${obj.place}" />
									</div>
								</div>
							`;
						},
						data: dataUpcomingTrips
					},
					{
						height: 32,
						template: "<span class='subTitle strong'>Activities</span>"
					},
					{
						view: "carousel",
						css: "activities",
						height: 200,
						cols: [
							{
								type: "clean",
								cols: [
									{template: slide, css: "slideWrapp", data: {title: "Self-drive", src: "./activities/self_ride.png"}},
									{template: slide, css: "slideWrapp", data: {title: "Hiking", src: "./activities/hiking.png"}},
									{template: slide, css: "slideWrapp", data: {title: "Excursions", src: "./activities/excursions.png"}}
								]
							},
							{
								type: "clean",
								cols: [
									{template: slide, css: "slideWrapp", data: {title: "Self-drive", src: "./activities/self_ride.png"}},
									{template: slide, css: "slideWrapp", data: {title: "Hiking", src: "./activities/hiking.png"}},
									{template: slide, css: "slideWrapp", data: {title: "Excursions", src: "./activities/excursions.png"}}
								]
							}
						],
						navigation: {
							type: "side",
							items: false
						}
					}
				]
			}
		}
	]
};
