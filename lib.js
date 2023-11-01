function avg(numbers){
    let s = numbers.reduce((prev, curr)=>prev + curr,0);
    return s/numbers.length;
}

function prime(num){
    if (num <= 1) {
        return false;
    }

    // 2부터 제곱근까지의 수로 나누어 떨어지는지 확인합니다.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function fact(num)
{
    if (num < 0 || num > 15) {
        return -1;
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * fact(num - 1);
    }
}

module.exports = {
    avg,
    prime,
    fact
}