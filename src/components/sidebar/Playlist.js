function Playlists() {
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto overflow-hidden border-t border-white border-opacity-20">
			<ul className="">
				{new Array(5).fill(<li>
					<a href className="text-sm text-link hover:text-white flex h-8 items-center">
						Wtcn Main
					</a>
				</li>)}
			</ul>
		</nav>
	)
}

export default Playlists