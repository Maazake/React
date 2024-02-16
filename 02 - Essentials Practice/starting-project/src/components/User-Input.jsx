import { useState } from 'react'

const UserInput = ({ onChange, userInput }) => {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<label>
					<label>initial investment</label>
					<input
						type='number'
						required
						value={userInput.initialInvestment}
						onChange={event => onChange('initialInvestment', event.target.value)}
					/>
				</label>
				<label>
					<label>annual investment</label>
					<input
						type='number'
						required
						value={userInput.annualInvestment}
						onChange={event => onChange('annualInvestment', event.target.value)}
					/>
				</label>
			</div>
			<div className='input-group'>
				<label>
					<label>expected return</label>
					<input
						type='number'
						required
						value={userInput.expectedReturn}
						onChange={event => onChange('expectedReturn', event.target.value)}
					/>
				</label>
				<label>
					<label>duration</label>
					<input
						type='number'
						required
						value={userInput.duration}
						onChange={event => onChange('duration', event.target.value)}
					/>
				</label>
			</div>
		</section>
	)
}

export default UserInput
