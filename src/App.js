import "./App.css";
import React, { useState } from "react";

import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar, {
	CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";
import format from "date-fns/format";

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");

const daysOfWeek = [
	{ name: "Sunday", nameAbbr: "Sun", index: 0, isWeekend: true },
	{ name: "Monday", nameAbbr: "Mon", index: 1, isWeekend: false },
	{ name: "Tuesday", nameAbbr: "Tues", index: 2, isWeekend: false },
	{ name: "Wednesday", nameAbbr: "Wed", index: 3, isWeekend: false },
	{ name: "Thursday", nameAbbr: "Thur", index: 4, isWeekend: false },
	{ name: "Friday", nameAbbr: "Fri", index: 5, isWeekend: false },
	{ name: "Saturday", nameAbbr: "Sat", index: 6, isWeekend: true },
];

function App() {
	const [selectedDate, setSelectedDate] = useState(null);

	const selectionConfiguration = {
		type: CALENDAR_SELECTION_TYPE.single,
		date: selectedDate,
	};

	return (
		<div className="App">
			<header className="App__header">
				<BpkText
					tagName="h1"
					textStyle="xxl"
				>
					Flight Schedule
				</BpkText>
			</header>

			<main className="App__main">
				<div className="calendar-wrapper">
					<BpkCalendar
						id="calendar"
						onDateSelect={(date) => setSelectedDate(date)}
						formatMonth={formatMonth}
						formatDateFull={formatDateFull}
						daysOfWeek={daysOfWeek}
						weekStartsOn={0}
						changeMonthLabel="Change month"
						nextMonthLabel="Next month"
						previousMonthLabel="Previous month"
						selectionConfiguration={selectionConfiguration}
					/>
				</div>

				<BpkButton
					onClick={() =>
						alert(
							selectedDate
								? `Selected Date: ${formatDateFull(selectedDate)}`
								: "Please select a date",
						)
					}
				>
					Continue
				</BpkButton>
			</main>
		</div>
	);
}

export default App;
