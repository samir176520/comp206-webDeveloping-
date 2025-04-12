let obj: number[] = [
    1, 2, 3, 4 ,4 ,4, 5, 5, 5   
]

const arr = (x: number[]) :number[] => 
    {
        let counter:any={}
        for (let i = 0; i < x.length; i++)
        {
            if (counter[x[i]] == undefined)
                counter[x[i]] = 0;
            counter[x[i]]++
        }
        
        let newobj:number[] = []
        let i: keyof typeof counter
        for (i in counter)
        {
            if (counter[i] < 3)
                newobj.push(i as unknown as number)
        }
        return newobj
    }

    console.log(arr(obj))
