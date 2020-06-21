import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

 export default function Table({dataInfo}) {

    const columns = [
        { title: 'AcademyID', field: 'academyId' },
        { title: 'Low Risk', field: 'lowRisk', type: 'numeric' },
        { title: 'Need Replacement', field: 'highRisk', type: 'numeric' },
        { title: 'Total', field: 'total', type: 'numeric' },
      ];

    const [data, setData] = useState([]);

    const [state, setState] = useState({})

    useEffect(() =>{
        const schoolIDs = getSchoolIdsList(dataInfo);
        console.log(schoolIDs);
        const buildData = (dataInfo, schoolIDs) => {
            const data = schoolIDs.map((school, index)=>{
                const lowRisk = [];
                const highRisk = [];
                dataInfo.forEach((item, i) => {
                    if(item.academyId === school){
                        if(item.avgDailyDischarge > 0.3 ){
                            highRisk.unshift(item)
                        } else if(item.avgDailyDischarge < 0.3 && item.avgDailyDischarge > 0.2){
                            lowRisk.unshift(item);
                        }
                    }
                });
                return{
                    academyId : school,
                    lowRisk: lowRisk.length,
                    highRisk: highRisk.length,
                    total: highRisk.length + lowRisk.length
                }
            });
            setData(data);
        }

        buildData(dataInfo,schoolIDs);
    }, [dataInfo]);

    const getSchoolIdsList = dataInfo =>{  
        const schoolIDs = [];
         dataInfo.forEach((item) => {
            if(schoolIDs.indexOf(item.academyId) === -1) schoolIDs.unshift(item.academyId);
        });
        return schoolIDs
    }  

    return (
    <div>
      <MaterialTable
        title="Issue devices count tracker"
        icons={tableIcons}
        columns={columns}
        data={data}
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          }
        }}
      />
      </div>
    )
  }

//   [
//     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//   ]

  
