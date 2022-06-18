import { useState, useEffect } from "react";

const PERFECT = "PERFECT";
const INJURED = "INJURED";
const CRITICAL = "CRITICAL";
const DEAD = "DEAD";

function useStatus(hp = 100) {
	const [status, setStatus] = useState(PERFECT);

	useEffect(() => {
		if (hp > 75) {
			setStatus(PERFECT);
		} else if (hp > 25) {
			setStatus(INJURED);
		} else if (hp > 0) {
			setStatus(CRITICAL);
		} else {
			setStatus(DEAD);
		}
	}, [hp]);

	return status;
}

export default useStatus;
