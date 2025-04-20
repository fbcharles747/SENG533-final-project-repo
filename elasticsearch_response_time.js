import http from 'k6/http';
import { sleep } from 'k6';
import { group } from 'k6';

export let options = {
    stages: [
        { duration: '0s', target: 1 },
        { duration: '5m', target: 1 },
    ],
};

export default function () {

    // run_model
    group( 'Run Model', function () {
        http.get('http://10.1.8.118/system_performance/estimate/historical?calendar_year=2025&month=4',{
            headers:{
                accept: 'application/json',
                'x-api-key': 'jzoo0hnhylSvY3UHIfdQJ1OYEmElO2l1S461oMW2_Dg'
            }
        })
        sleep(1)
    });
    
}
