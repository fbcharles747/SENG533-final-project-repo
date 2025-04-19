import http from 'k6/http';
import { sleep } from 'k6';
import { group } from 'k6';

export let options = {
    stages: [
        { duration: '5s', target: 1 },
        { duration: '1m', target: 1 },
        { duration: '5s', target: 2 },
        { duration: '1m', target: 2 },
        { duration: '5s', target: 4 },
        { duration: '1m', target: 4 },
        { duration: '5s', target: 8 },
        { duration: '1m', target: 8 },
        { duration: '5s', target: 16 },
        { duration: '1m', target: 16 },
        { duration: '5s', target: 20 }, // spike to 2 vu instantly
        { duration: '1m', target: 20 },  // Ramp-up to 5 users over 15 seconds
        { duration: '5s', target: 24 },
        { duration: '1m', target: 24 }, // Ramp-up to 10 users over next 15 seconds
        { duration: '5s', target: 28 }, 
        { duration: '1m', target: 28 }, // Ramp-up to 15 users over next 15 seconds
        { duration: '5s', target: 32 },
        { duration: '1m', target: 32 }, // Ramp-up to 20 users over next 15 seconds
        { duration: '5s', target: 36 },
        { duration: '1m', target: 36 },
        { duration: '5s', target: 40 },
        { duration: '1m', target: 40 },
        { duration: '5s', target: 44 },
        { duration: '1m', target: 44 },
        { duration: '5s', target: 48 },
        { duration: '1m', target: 48 },
        { duration: '5s', target: 52 },
        { duration: '1m', target: 52 },
    ],
};

export default function () {

    // run_model
    group( 'Run Model', function () {
        http.get('http://10.1.8.118/pv_systems/run_model',{
            headers:{
                accept: 'application/json',
                'x-api-key': 'jzoo0hnhylSvY3UHIfdQJ1OYEmElO2l1S461oMW2_Dg'
            }
        })
        sleep(1);
    });
    
}
