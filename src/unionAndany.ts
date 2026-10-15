let subs : number | string = '1M'

let apirequestStatus : 'pending' | 'success' | 'error' = 'pending'

apirequestStatus = 'success'

let airlineSeat : 'window' | 'aisle' | 'middle' = 'window'

airlineSeat = 'aisle'

const orders = ['12', '13', '14'] 

let currentorder : string | undefined = undefined

for(let order of orders){
    if(order === '13'){
        currentorder = order
        break
    }
    currentorder = '11'
}

console.log(currentorder);