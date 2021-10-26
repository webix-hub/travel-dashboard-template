import {dataPassengers} from "../data/dataPassengers";
import {dataTicket} from "../data/dataTicket";

export const tickets = {
	height: 306,
	rows: [
		{
			view: "toolbar",
			padding: {left: 10},
			height: 40,
			cols: [
				{
					view: "label",
					label: "Tickets"
				},
				{}
			]
		},
		{
			type: "clean",
			rows: [
				{
					view: "template",
					css: "ticketWrapp",
					template(obj) {
						return `
							<div class="ticketInner flex flexCol">
								<div class="ticketHeader">
									<div class="company">
										<img src="${obj.companyLogo}" alt="${obj.company}" />
										<span class="strong">${obj.company}</span>
									</div>
									<div class="flex">
										<div class="ticketIconBlock">
											<span class="ticketIcon mdi mdi-account mdi-18px"></span>
											<span class="ticketSmText">${obj.passengers}</span>
										</div>
										<div class="ticketIconBlock">
											<span class="ticketIcon mdi mdi-bag-carry-on mdi-18px"></span>
											<span class="ticketSmText">${obj.luggage}</span>
										</div>
										<div class="ticketIconBlock">
											<span class="ticketIcon mdi mdi-seat-recline-normal mdi-18px"></span>
											<span class="ticketSmText">${obj.class}</span>
										</div>
									</div>
								</div>
								<div class="flightWrapp">
									<div class="departureBlock">
										<span class="time">${obj.departureTime}</span>
										<span class="city">${obj.departure}</span>
										<span class="date">${obj.departureDate}</span>
									</div>
									<div class="flightBlock">
										<span class="flightTime">${obj.flightTime}</span>
										<div class="flightImg">
											<div class="flightDashed"></div>
											<span class="airplaneIcon mdi mdi-airplane mdi-rotate-90 mdi-18px"></span>
										</div>
										<div class="flex spaceBetween">
											<span class="airportCode">${obj.departureCode}</span>
											<span class="airportCode">${obj.arrivalCode}</span>
										</div>
									</div>
									<div class="arrivalBlock">
										<span class="time">${obj.arrivalTime}</span>
										<span class="city">${obj.arrival}</span>
										<span class="date">${obj.arrivalDate}</span>
									</div>
								</div>
							</div>
						`;
					},
					data: dataTicket
				},
				{
					view: "datatable",
					css: "ticketsTable",
					rowHeight: 24,
					headerRowHeight: 32,
					height: 120,
					columns: [
						{id: "passenger", header: "Passenger", fillspace: true},
						{id: "flight", header: "Flight number", width: 120},
						{id: "gate", header: "Gate", width: 60},
						{id: "boarding", header: "Boarding time", width: 120},
						{id: "zone", header: "Zone", width: 60},
						{id: "seat", header: "Seat", width: 50}
					],
					data: dataPassengers
				}
			]
		}
	]
};
