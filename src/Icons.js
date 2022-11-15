const HomeIcon = ({size}) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
				fill="currentColor"/>
		</svg>
	)
}

const SearchIcon = ({size}) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
				fill="currentColor" fillRule="evenodd"/>
		</svg>
	)
}

const CollectionIcon = ({size}) => {
	return (
		<svg viewBox="0 0 512 512" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
				fill="currentColor"/>
		</svg>
	)
}

const PlusIcon = ({size}) => {
	return (
		<svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor"/>
			<path fill="none" d="M0 0h16v16H0z"/>
		</svg>
	)
}

const HeartIcon = ({size}) => {
	return (
		<svg height={size} width={size}   viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
			<path fill="currentColor"
			 d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"/>
		</svg>
	)
}


const DownloadIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			      d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"/>
		</svg>
	)
}
const NextIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" 
			d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"/>
		</svg>
	)
}
const PrevIcon = ({size}) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
				<path fill="currentColor" 
			d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"/>
		</svg>
	)
}
const DownDirIcon = ({size}) => {
	return (
		<svg  height={size} width={size} viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor"
			 d="M14 6l-6 6-6-6h12z"/>
		</svg>
	)
}
const ExternalIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"/>
		<path fill="currentColor" d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"/>
		</svg>
	)
}
const PlayIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/>
		</svg>
	)
}
const PauseIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"/>
		</svg>
	)
}
const PlayerPrevIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"/>
		</svg>
	)
}
const PlayerNextIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"/>
		</svg>
	)
}
const RepeatIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"/>
		</svg>
	)
}

const ShuffleIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"/>
			<path fill="currentColor" d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"/>
		</svg>
	)
}
const LycrisIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"/>
		</svg>
	)
}
const QueueIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"/>
		</svg>
	)
}
const DeviceIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"/>
		</svg>
	)
}
const PictureInPicturIcon = ({size}) => {
	return (
		<svg width={size} height= {size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<g fill="currentColor" fill-rule="evenodd">
				<path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill-rule="nonzero"/>
				<path d="M10 8h4v3h-4z"/>
			</g>
		</svg>
	)
}
const VolumeMutedIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"/>
			<path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>		</svg>
	)
}
const VolumeLowIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>
		</svg>
	)
}
const VolumeNormalIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"/>
		</svg>
	)
}
const VolumeFullIcon = ({size}) => {
	return (
		<svg height={size} width={size}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
			<path fill="currentColor" d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"/>
			<path fill="currentColor" d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>
		</svg>
	)
}


const Icon = ({name, size = 24}) => {

	const icons = {
		home: HomeIcon,
		search: SearchIcon,
		collection: CollectionIcon,
		plus: PlusIcon,
		heart: HeartIcon,
		download: DownloadIcon,
		prev: PrevIcon,
		next: NextIcon,
		downDir: DownDirIcon,
		external: ExternalIcon,
		play: PlayIcon,
		pause: PauseIcon,
		playerPrev: PlayerPrevIcon,
		playerNext: PlayerNextIcon,
		shuffle: ShuffleIcon,
		repeat: RepeatIcon,
		pictureInPicture: PictureInPicturIcon,
		lycris: LycrisIcon,
		queue: QueueIcon,
		device: DeviceIcon,	
		volumeMuted: VolumeMutedIcon,
		volumeLow: VolumeLowIcon,
		volumeNormal: VolumeNormalIcon,
		volumeFull: VolumeFullIcon		
	}

	const Component = icons[name]
	return <Component size={size}/>

}

export {
	Icon
}
