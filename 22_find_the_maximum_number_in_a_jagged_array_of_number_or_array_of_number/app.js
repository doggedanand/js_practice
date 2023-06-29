let ar = [1, 2, [15, [23], [5, 12]], [100]];

{
    function sumArray(ar) {
        let sum = 0;
        let collect = [];

        for (let el of ar) {

            if (Array.isArray(el)) {
                el = sumArray(el);
                console.log(el)
            }

            sum += el;
            console.log(sum + 'sum')
            console.log(el + 'el')


        }

        return sum;

    }

    //    console.log(sumArray(ar));
    // console.log(collect+ "array list");
}