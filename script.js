let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string'; 
    const calculatedAsNumber = isString ? parseFloat(calculated) : Number(calculated); //added parseFLoat to calculated. replaced parseNumber with Number
    return calculated = calculatedAsNumber + 1; // replaced === the strict operator
}

const calcUser = () => {
  if(logCalc()) { // returns a boolean value based on comparison
        if (calculated > 2) {
         user = 'John';
         state = 'requesting';
        }

        if (calculated > 3) {
         state = 'idle';
        }
    }
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()