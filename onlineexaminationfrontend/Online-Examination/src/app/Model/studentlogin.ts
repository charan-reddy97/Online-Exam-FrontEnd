export class Profile
{
    name:string = "";
    email:string = "";
    role:number = 0;
    id:number=0;
    
}

export class Token
{
    profile :Profile|undefined;
    token:string|undefined;
}