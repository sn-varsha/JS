let i,j,row;
let n=20;
for(i=0;i<n;i++){
    row="";
    for(j=0;j<n;j++){
        if(i==0 || i==n-1 || j==0 || j==n-1 || j==Math.floor(n/2) 
            || i==Math.floor(n/2) || i==j || i+j==n-1 
            || i+j==Math.floor(n/2) || i-j==Math.floor(n/2)
            || i+j==(n-1)+Math.floor(n/2) || j-i==Math.floor(n/2)){
            row=row+"*";
        }
        else{
            row=row+" ";
        }
    }
    console.log(row);
}