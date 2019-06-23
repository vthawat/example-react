import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'
import { LandingTemplate } from 'layouts/templates'



it('renders without error', () => {
	shallow(<App />)
})

describe('Checking properties', () => {

	it('Render without error', () => {
		shallow(<App />)
	})

	const comp = mount(<App />)
	const template = comp.find(LandingTemplate).first()		

	it('Landing template was mount', () => {
		expect(template.exists()).toBe(true)
	})

	it('App title is define', () => {
		expect(template.props().appTitle).toBeDefined()
	})

	it('Theme color is #686de0', () => {
		expect(template.props().themeColor).toEqual('#686de0')
	})	

	it('App contains word "PSU Passport"', () => {
		const word = 'PSU Passport'
		expect(template.html()).toContain(word)
	})
	
})

