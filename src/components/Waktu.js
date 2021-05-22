function Waktu() {

	const d = new Date()
	const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
	const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember']

	const day = days[d.getDay()]
	const date = d.getDate()
	const month = months[d.getMonth()]
	const year = d.getFullYear()

	return (
		<span>
			{ `${day}, ${date} ${month} ${year}` }
		</span>
	)
}

export default Waktu
