import React from 'react';
import ReactDOM from 'react-dom';
import DialogTable from './DialogTable';
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
    // It will be a failed test as data prop is missing which is compulsory for DialogTable at it should be in structure of data array as defined above
    ReactDOM.render(
        <DialogTable data={data}></DialogTable>, div)
});


it('matches snapshot', () => {
    const data = [
        {
            "academyId": 30015,
            "serialNumber": "TT-C67ML-A-0001-02522",
            "avgDailyDischarge": 1.0580
        }, {
            "academyId": 30015,
            "serialNumber": "1805C67HD02212",
            "avgDailyDischarge": 0.4624
        }, {
            "academyId": 30015,
            "serialNumber": "NGTT-0040",
            "avgDailyDischarge": 0.3634
        }, {
            "academyId": 30015,
            "serialNumber": "1805C67HD02244",
            "avgDailyDischarge": 0.3293
        }, {
            "academyId": 30015,
            "serialNumber": "1805C67HD02440",
            "avgDailyDischarge": 0.318
        }, {
            "academyId": 30015,
            "serialNumber": "TT-C67ML-A-0001-02573",
            "avgDailyDischarge": 0.3094
        }, {
            "academyId": 30015,
            "serialNumber": "TT-C67ML-A-0001-01355",
            "avgDailyDischarge": 0.2856
        }, {
            "academyId": 30015,
            "serialNumber": "1805C67HD01980",
            "avgDailyDischarge": 0.2129
        }
    ];
    const tree = ReactTestRenderer.create(<DialogTable data={data}></DialogTable>).toJSON();
    expect(tree).toMatchSnapshot();
})
