console.log('-------- 1 --------');

    let a = 1;
        while (a <=50) {
            console.log(a);
            a++;
        }

    let b = 35;
        while (b >=8) {
            console.log(b);
            b--;
        }

console.log('-------- 2 --------');

    let c = 89;
    while (c >= 11) {
        document.write(c, '<br>');
        c--;
    }

console.log('-------- 3 --------');

    let sum = 0;
        for(let i=0; i <=100; i++) {
            sum += i;
            
        }
        console.log(sum);

console.log('-------- 4 --------');

    let sum1 = 0;
        for(let i=1; i <=5; i++) {
            sum1 += i;
            console.log(sum1);
        }

console.log('-------- 5 --------');

        for (let t = 8; t <= 56; t++) {
            if (t % 2 == 0) {
                console.log(t)
            }
        }

    let r = 8;
        while (r <= 56) {
            if (r % 2 == 0) {
                console.log(r)
            }
            r++
        }

console.log('-------- 6 --------');

    let gen = 0;
        for(let i = 2; i <=10; i++){
            
            for(let j = 2; j <=10; j++){
                gen = i*j;
                console.log(`${i} * ${j} = ${gen}`);
            }
        }

console.log('-------- 7 --------');

    let num = 0;

        for(n1 = 1000; n1 >= 50; n1 /= 2) {
            num++
        }
        console.log(`Количество итераций ${num}`)
        console.log(`Конечный результат ${n1}`)


console.log('-------- 8 --------');

    let sum2 = 0,
        avg = 0;
        for(let i = 1;; i++){
            let num = prompt('Введите число');
            if(num == '' || num == 0){
                break;
            }else if(!+num){
                alert('Ошибка!');
            }else{
                sum2 += +num;
                avg = sum2 / i;
            }
        }
        console.log(`Общая сумма ${sum2}`);
        console.log(`Среднее арифметическое введённых чисел ${avg}`);
        
console.log('-------- 9 --------');      

    let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
        num1 = '',
        count = 0,
        max,
        min;
        for(let i = 0;; i++){
            if(str[i] != ' ' && str[i] != undefined){
                num += str[i];
            }else{
                console.log(num);
                if(count == 0){
                    max = +num;
                    min = +num;
                }
                    count++
                    max = (max < +num)? +num: max;
                    min = (min > +num)? +num: min;
                    num = '';
            }
            
            if(str[i] == undefined){
                break;
            }
        }
        console.log(`Минимальное ${min}`);
        console.log(`Максимальное ${max}`);
    
console.log('-------- 10 --------');

    let n = 123,
        count1 = 0,
        sum3 = 0,
        str1 = n+'',
        str2 = '';
        for(let i = 0;; i++){
            if(str1[i] != undefined){
                console.log(str1[i]);
                count1++;
                sum3 += +str1[i];
            }
            
            if(str1[i] == undefined) {
                break;
            }
        }

        for(let i = count1-1; i >= 0; i--){
                str2 += str1[i];
            
        }
        console.log(`Количество цифр в числе ${count1}`);
        console.log(`Сумма цифр в числе ${sum3}`);
        console.log(`Обратный порядок ${str2}`);
        

