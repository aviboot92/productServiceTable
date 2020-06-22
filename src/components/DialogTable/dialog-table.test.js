import React from 'react';
import ReactDOM from 'react-dom';
import DialogTable from './DialogTable';
import {render} from '@testing-library/react';
import ReactTestRenderer from 'react-test-renderer';

it('should render without exploding', () => {
    const div = document.createElement("div");
    const data = [
        {
            "academyId": 30021,
            "serialNumber": "TT-C67ML-A-0001-02583",
            "avgDailyDischarge": 0.2121
        }
    ];
    ReactDOM.render(
        <DialogTable data={data}></DialogTable>, div)
})
