import moment from "moment";
import { useEffect, useState } from "react";

const paddNumber = (number: number) => {
	if (String(number).length > 1) {
		return String(number);
	}
	return `0${String(number)}`;
};

const calculateTimeLeft = (date: string) => {
	const difference = +new Date(moment(date).format("MM/DD/YYYY")) - +new Date();

	if (difference > 0) {
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));

		return {
			days: paddNumber(days),
			hours: paddNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
			minutes: paddNumber(Math.floor((difference / 1000 / 60) % 60)),
			seconds: paddNumber(Math.floor((difference / 1000) % 60))
		};
	}

	return {
		days: "00",
		hours: "00",
		minutes: "00",
		seconds: "00"
	};
};

const useCountdown = (date: string) => {
	const [timeLeft, setTimeLeft] = useState<{
		days?: string;
		hours?: string;
		minutes?: string;
		seconds?: string;
	}>(calculateTimeLeft(date));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft(date));
		}, 1000);

		return () => clearTimeout(timer);
	});

	return { timeLeft };
};

export default useCountdown;
