import { shallow } from "enzyme"
import { Dropdown } from "../Dropdown"
import React from 'react';

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('#button')).toBeDefined(); 
    })
})