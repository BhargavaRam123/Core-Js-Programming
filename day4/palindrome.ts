function isPalindrome(x: number): boolean {
    if(x<0)
    return false;
    let a:string = ""
    while(x>0)
    {
        let rem:number = x%10
        a+=rem
        x=Math.floor(x/10)
    }
    let i=0,j=a.length-1
    while(i<=j)
    {
        if(a[i]===a[j])
        {
            i++;
            j--;
        }
        else
        {
            return false;
        }
    }
    return true
};
