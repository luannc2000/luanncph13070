class Pokemon {
    abilities?:any[];
    height?:number;
    id:number;
    name:string;
    type?:any[];
    weight?:number;
    image?:string;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
}
export default Pokemon