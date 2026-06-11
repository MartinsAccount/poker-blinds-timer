const TimeSvg = (isActive: boolean = false) => {
	let color = isActive ? '#6d5dfc' : '#9baacf';

	return (
		<svg width={40} fill={color} viewBox="0 0 512 512">
			<path
				fill={color}
				d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"
			/>
		</svg>
	);
};

export default TimeSvg;
