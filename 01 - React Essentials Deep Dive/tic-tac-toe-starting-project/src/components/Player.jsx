import { useState } from 'react'

const Player = ({ name, symbol, isActive, onChangeName }) => {
	const [playerName, setPlayerName] = useState(name)
	const [isEditing, setIsEditing] = useState(false)

	const handleEditClick = () => {
		setIsEditing(editing => !editing)

		if (isEditing) {
			onChangeName(symbol, playerName)
		}
	}

	const handleChange = event => {
		setPlayerName(event.target.value)
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{!isEditing ? (
					<span className='player-name'>{playerName}</span>
				) : (
					<input type='text' required value={playerName} onChange={handleChange}></input>
				)}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
		</li>
	)
}

export default Player
