import { mount } from 'enzyme';
import React from 'react';

import { Title } from './TitleComponent';

/** @test {Title Component} */

describe('Title Component',()=>{
    it('should render',()=>{
        const wrapper = mount(<Title/>);
        expect(wrapper.find('h1')).toHaveLength(1);
    })
})