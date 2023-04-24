let sum : number = 0;

let count : number = 0;

for (let i = 4; i < 30; i++)
{
    if (i == 2)
    {
        sum += i;
        count++;
        continue;
    }
    let primeCheck = true;
    for (let j = 2; j < Math.sqrt(i);j++)
    {
        if (i % j == 0)
        {
            primeCheck = false;
            break;
        }
    }
    if (primeCheck)
    {
        sum += i;
        count++;
    }
}

console.log("prime sum =" + sum);