let currentDay = 'sun'

if(currentDay === 'mon'){
  console.log('Timings: 10:00-06:00')
} else if(currentDay === 'tue'){ 
  console.log('Timings: 09:00-07:00')
} else if(currentDay === 'wed'){ 
  console.log('Timings: 08:00-08:00')
} else if(currentDay === 'thu'){ 
  console.log('Timings: 07:00-09:00')
} else if(currentDay === 'fri'){ 
  console.log('Timings: 06:00-04:00')
} else if(currentDay === 'sat'){ 
  console.log('Timings: 05:00-03:00')
} else if(currentDay === 'sun'){ 
  console.log('Timings: 04:00-02:00')
}

switch(currentDay) {
    case 'mon':
    console.log('Timings: 10:00-06:00')
    break;
    case 'tue':
    console.log('Timings: 09:00-07:00')
    break;
    case 'wed':
    console.log('Timings: 08:00-08:00')
    break;
    case 'thu':
    console.log('Timings: 07:00-09:00')
    break;
    case 'fri':
    console.log('Timings: 06:00-04:00')
    break;
    case 'sat':
    console.log('Timings: 05:00-03:00')
    break;
    case 'sun':
    console.log('Timings: 04:00-02:00')
    break;
    default:
    console.log('Timings: 04:00-02:00')
}