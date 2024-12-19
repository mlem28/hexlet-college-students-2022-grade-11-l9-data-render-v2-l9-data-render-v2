function FilterCafes({ filterCafes }) {
	return (
		<div className="controls">
			<select name="subway" id="subway" onChange={filterCafes}>
				<option value="All" selected>
					Все
				</option>
				<option value="Moscow">Московская</option>
				<option value="Arbat">Арбат</option>
				<option value="Alexanders Garden">Александровский сад</option>
				<option value="Culture">Парк Культуры</option>
				<option value="Theater">Театральная</option>
			</select>
		</div>
	);
}

export default FilterCafes;
